package com.mediaPlayer;

import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.media.MediaPlayer.OnCompletionListener;
import android.media.MediaPlayer.OnErrorListener;
import android.media.MediaPlayer.OnBufferingUpdateListener;
import android.media.MediaPlayer.OnPreparedListener;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Binder;
import android.os.IBinder;
import android.telephony.PhoneStateListener;
import android.telephony.TelephonyManager;

import java.io.IOException;
import java.util.Objects;

public class Signal extends Service implements OnErrorListener,
        OnCompletionListener,
        OnPreparedListener,
        OnBufferingUpdateListener {

    private Class<?> clsActivity;

    private MediaPlayer mediaPlayer;

    private final IBinder binder = new RadioBinder();
    private Context context;
    private EventsReceiver eventsReceiver;
    private ReactNativeAudioStreamingModule module;

    private TelephonyManager phoneManager;
    private PhoneListener phoneStateListener;

    private String URL;
    private boolean changedURL = true;

    public class RadioBinder extends Binder {
        public Signal getService() {
            return Signal.this;
        }
    }

    @Override
    public IBinder onBind(Intent intent) {
        return binder;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        return Service.START_NOT_STICKY;
    }

    public void setData(Context context, ReactNativeAudioStreamingModule module) {
        this.context = context;
        this.clsActivity = module.getClassActivity();
        this.module = module;

        this.eventsReceiver = new EventsReceiver(this.module);

        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.SERVICE_INIT));
        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.CONNECTION_ERROR));

        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.MUSIC_START_PREPARE));
        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.MUSIC_PREPARE));
        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.MUSIC_START));
        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.MUSIC_PAUSE));
        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.MUSIC_STOP));
        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.MUSIC_COMPLETE));
        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.MUSIC_ERROR));
        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.MUSIC_BUFFER_STATUS));
        registerReceiver(this.eventsReceiver, new IntentFilter(Mode.MUSIC_STATUS));

        this.phoneStateListener = new PhoneListener(this.module);
        this.phoneManager = (TelephonyManager) getSystemService(TELEPHONY_SERVICE);
        if (this.phoneManager != null) {
            this.phoneManager.listen(this.phoneStateListener, PhoneStateListener.LISTEN_CALL_STATE);
        }
    }

    private void createMediaPlayer() {
        if (this.mediaPlayer != null) {
            removeMediaPlayer(this.mediaPlayer);
        }
        this.mediaPlayer = new MediaPlayer();
        this.mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
        this.mediaPlayer.setOnPreparedListener(this);
        this.mediaPlayer.setOnCompletionListener(this);
        this.mediaPlayer.setOnErrorListener(this);
        this.mediaPlayer.setOnBufferingUpdateListener(this);
    }

    private void removeMediaPlayer(MediaPlayer mp) {
        if (mp != null) {
            mp.stop();
            mp.release();

            if (mp == this.mediaPlayer) {
                this.mediaPlayer = null;
            }
        }
    }

    @Override
    public void onCreate() {
        sendBroadcast(new Intent(Mode.SERVICE_INIT));
    }

    public boolean isConnected() {
        ConnectivityManager cm = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo netInfo = cm.getActiveNetworkInfo();
        return netInfo != null && netInfo.isConnectedOrConnecting();
    }

    public void setURL(String URL) {
        changedURL = !Objects.equals(URL, this.URL);
        this.URL = URL;
    }

    private boolean setMediaPlayerURL() {
        if (this.mediaPlayer != null) {
            try {
                this.mediaPlayer.setDataSource(this.URL);
            } catch (IOException e) {
                return false;
            }
        }
        return true;
    }

    public boolean isPlaying() {
        return this.mediaPlayer != null && this.mediaPlayer.isPlaying();
    }

    public void play() {
        if (isConnected()) {
            if (changedURL || this.mediaPlayer == null) {
                createMediaPlayer();
                if (setMediaPlayerURL()) {
                    changedURL = false;
                    this.prepare();
                } else {
                    sendBroadcast(new Intent(Mode.MUSIC_ERROR));
                }
            } else if (!isPlaying()) {
                this.mediaPlayer.start();
                this.mediaPlayer.setOnCompletionListener(this);
                sendBroadcast(new Intent(Mode.MUSIC_START));
            }
        } else {
            stop();
            sendBroadcast(new Intent(Mode.CONNECTION_ERROR));
        }
    }

    public void pause() {
        if (this.mediaPlayer != null && isPlaying()) {
            this.mediaPlayer.pause();
        }
        sendBroadcast(new Intent(Mode.MUSIC_PAUSE));
    }

    public void stop() {
        if (this.mediaPlayer != null && isPlaying()) {
            this.mediaPlayer.stop();
        }
        sendBroadcast(new Intent(Mode.MUSIC_STOP));
    }

    public void prepare() {
        sendBroadcast(new Intent(Mode.MUSIC_START_PREPARE));

        try {
            this.mediaPlayer.prepareAsync();
        } catch (IllegalStateException e) {
            stop();
        }
    }

    public boolean seek(int ms) {
        if (this.mediaPlayer != null) {
            try {
                this.mediaPlayer.seekTo(ms);
                return true;
            } catch (IllegalStateException e) {
                return false;
            }
        }
        return false;
    }

    public void askStatus() {
        boolean isPlaying = isPlaying();

        int currentPosition = 0;
        int duration = 0;

        if (this.mediaPlayer != null) {
            currentPosition = this.mediaPlayer.getCurrentPosition();
            duration = this.mediaPlayer.getDuration();
        }

        Intent intent = new Intent(Mode.MUSIC_STATUS);
        intent.putExtra("isPlaying", isPlaying);
        intent.putExtra("position", currentPosition);
        intent.putExtra("duration", duration);
        sendBroadcast(intent);
    }

    @Override
    public void onPrepared(MediaPlayer mp) {
        if (mp != this.mediaPlayer) {
            removeMediaPlayer(mp);
            return;
        }

        sendBroadcast(new Intent(Mode.MUSIC_PREPARE));
        this.mediaPlayer.start();
        this.mediaPlayer.setOnCompletionListener(this);
        sendBroadcast(new Intent(Mode.MUSIC_START));
    }

    @Override
    public void onCompletion(MediaPlayer mp) {
        if (mp != this.mediaPlayer) {
            removeMediaPlayer(mp);
            return;
        }
        changedURL = true;
        sendBroadcast(new Intent(Mode.MUSIC_COMPLETE));
    }

    @Override
    public void onBufferingUpdate(MediaPlayer mp, int percent) {
        if (mp != this.mediaPlayer) {
            removeMediaPlayer(mp);
            return;
        }

        Intent intent = new Intent(Mode.MUSIC_BUFFER_STATUS);
        intent.putExtra("percent", percent);
        sendBroadcast(intent);
    }

    @Override
    public boolean onError(MediaPlayer mp, int what, int extra) {
        if (mp != this.mediaPlayer) {
            removeMediaPlayer(mp);
            return false;
        }
        sendBroadcast(new Intent(Mode.MUSIC_ERROR));
        return false;
    }
}