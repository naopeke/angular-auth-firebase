import { Injectable, inject } from '@angular/core';
import { Auth, authState, UserCredential, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//AngularのDependency Injection (DI) システムを使用してFirebase AuthenticationのAuthサービスにアクセスし、そのsignInWithEmailAndPasswordメソッドを呼び出しています。

  //Authサービスのインスタンスを取得。AuthサービスはFirebase AuthenticationをAngularアプリケーション内で使うためのサービス。
  firebaseAuth = inject(Auth);

  //Firebase Authenticationの状態を購読するために使用されるRxJSのObservableを作成しています。authState関数は@angular/fire/authパッケージから提供されており、Firebase Authenticationの認証状態の変更を監視するObservableを返します。このObservableは、ユーザーがログインまたはログアウトするたびに、Firebase Authenticationのユーザー情報（またはユーザーがログアウトした場合はnull）を発行します。
  //$記号は、変数がObservableを保持していることを示す慣例
  public currentUser$ = authState(this.firebaseAuth);

  //toSignalを使用してこのObservableをAngularのAsyncPipeやリアクティブなテンプレート表現に直接結びつけるためのSignalに変換しています。ただし、toSignalの部分については、Angularの標準APIやRxJSの標準機能には含まれていないため、AngularやRxJSの標準的な実装ではありません。恐らくこれはカスタムのヘルパー関数かもしれません。
  //currentUser$というObservableをシグナルに変換。このSignalはauthentication stateが変わるたびに更新
  currentUser = toSignal(this.currentUser$);

  //signInWithEmailAndPassword関数は、指定されたメールアドレスとパスワードでFirebase Authenticationにログインを試みます。この関数はPromise<UserCredential>を返し、Promiseが解決されるとUserCredentialオブジェクトが返されます。このオブジェクトには、ログインしたユーザーの情報が含まれます。
  login(email: string, password: string): Promise<UserCredential>{
    return signInWithEmailAndPassword(this.firebaseAuth, email, password);
  }

  logout(): Promise<void>{
    return signOut(this.firebaseAuth);
  }
}
