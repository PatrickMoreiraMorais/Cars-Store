import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC29TcLEqO0g59A_L_OzTNXJITCYhpaG2o",
  authDomain: "at-dr3-api.firebaseapp.com",
  databaseURL: "https://at-dr3-api-default-rtdb.firebaseio.com",
  projectId: "at-dr3-api",
  storageBucket: "at-dr3-api.appspot.com",
  messagingSenderId: "581782072165",
  appId: "1:581782072165:web:c97e1e88001ae231aa0f8c",
};

const app = initializeApp(firebaseConfig);
export default app;
