package tech.rahif.movieflix;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  // https://github.com/ionic-team/capacitor/issues/5469#issuecomment-1129924289
  @Override
  public void onStart() {
    super.onStart();
    bridge.getWebView().setVerticalScrollBarEnabled(false);
  }
}
