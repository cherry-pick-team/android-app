package com.mediaPlayer;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;


public class EventsReceiver extends BroadcastReceiver {
    private ReactNativeAudioStreamingModule module;

    public EventsReceiver(ReactNativeAudioStreamingModule module) {
        this.module = module;
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        WritableMap params = Arguments.createMap();
        params.putString("type", intent.getAction());

        switch (intent.getAction()) {
            case Mode.MUSIC_STATUS:
                params.putBoolean("isPlaying", intent.getBooleanExtra("isPlaying", false));
                params.putInt("position", intent.getIntExtra("position", 0));
                params.putInt("duration", intent.getIntExtra("duration", 0));
                break;
            case Mode.MUSIC_BUFFER_STATUS:
                params.putInt("percent", intent.getIntExtra("percent", 0));
                break;
        }

        this.module.sendEvent(this.module.getReactApplicationContextModule(), "AudioBridgeEvent", params);
    }
}