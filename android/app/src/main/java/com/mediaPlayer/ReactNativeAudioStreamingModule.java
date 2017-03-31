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

  public void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
    this.context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName, params);
  }

  @Override public String getName() {
    return "ReactNativeAudioStreaming";
  }

  @Override public void initialize() {
    super.initialize();

    //TODO
  }

  @Override public void onServiceConnected(ComponentName className, IBinder service) {
    //TODO
  }

  @Override public void onServiceDisconnected(ComponentName className) {
    //TODO
  }

  @ReactMethod public void play(String streamingURL, ReadableMap options) {
    //TODO
  }

  @ReactMethod public void stop() {
    // TODO
  }

  @ReactMethod public void pause() {
    // TODO
  }

  @ReactMethod public void resume() {
    // TODO
  }

  @ReactMethod public void getStatus(Callback callback) {
    //TODO
  }
}
