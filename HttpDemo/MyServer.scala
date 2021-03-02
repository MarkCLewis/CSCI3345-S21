import java.net._
import java.io._

val ss = new ServerSocket(4000)
val sock = ss.accept()
val in = new BufferedReader(new InputStreamReader(sock.getInputStream()))

while(true) {
	println(in.readLine())
}
