package com.mediaPlayer;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

public class ReactNativeAudioStreamingModule extends ReactContextBaseJavaModule
        implements ServiceConnection {

    private ReactApplicationContext context;

    private Class<?> clsActivity;
    private static Signal signal;
    private Intent bindIntent;
    private String URL;

    public ReactNativeAudioStreamingModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    public ReactApplicationContext getReactApplicationContextModule() {
        return this.context;
    }

    public Class<?> getClassActivity() {
        if (this.clsActivity == null) {
            this.clsActivity = getCurrentActivity().getClass();
        }
        return this.clsActivity;
    }

    @Override
    public String getName() {
        return "ReactNativeAudioStreaming";
    }

    public void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        this.context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    public Signal getSignal() {
        return signal;
    }

    @Override
    public void initialize() {
        super.initialize();

        try {
            bindIntent = new Intent(this.context, Signal.class);
            this.context.bindService(bindIntent, this, Context.BIND_AUTO_CREATE);
        } catch (Exception e) {
            Log.e("ERROR", e.getMessage());
        }
    }

    @Override
    public void onServiceConnected(ComponentName className, IBinder service) {
        signal = ((Signal.RadioBinder) service).getService();
        signal.setData(this.context, this);
    }

    @Override
    public void onServiceDisconnected(ComponentName className) {
        signal = null;
    }

    @ReactMethod
    public void resume() {
        signal.play();
    }

    @ReactMethod
    public void setURL(String URL) {
        this.URL = URL;
        signal.setURL(URL);
    }

    @ReactMethod
    public void play(String URL) {
        setURL(URL);
        resume();
    }

    @ReactMethod
    public void pause() {
        signal.pause();
    }

    @ReactMethod
    public void stop() {
        signal.stop();
    }

    @ReactMethod
    public void askStatus() {
        signal.askStatus();
    }

    @ReactMethod
    public void seek(int ms) {
        signal.seek(ms);
    }

    public void stopOncall() {
        this.signal.stop();
    }
}