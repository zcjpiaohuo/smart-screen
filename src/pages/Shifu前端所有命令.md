# Shifu前端所有命令

所涉及的所有端口可以参考，或自行修改

### **Camera**

**Capture**：<http://localhost:8089/capture> 代表拍的一张照片

**Stream**：<http://localhost:8089/stream> 代表一个字节流视频

**Info**: <http://localhost:8089/info> 代表一个表格静态信息

**Up**：<http://localhost:8089/move/up> 代表摄像头上移

**Down**：<http://localhost:8089/move/down> 代表摄像头下移

**Left**：<http://localhost:8089/move/left> 代表摄像头左移

**Right**：<http://localhost:8089/move/right> 代表摄像头右移



### **Camera 图表（promethus）**

**Memory usage**

http://localhost:9090/api/v1/query_range?query=node_namespace_pod_container:container_memory_working_set_bytes{namespace=%22default%22,%20pod=\~%22edgedevice-camera.\*%22,%20image!\~%22.\*pause:.\*%22}&start=2022-04-26T7:00:30.781Z&end=2022-04-26T7:10:00.781Z&step=60s

**cpu usage**

[http://localhost:9090/api/v1/query_range?query=node_namespace_pod_container:container_cpu_usage_seconds_total:sum_irate{namespace=%22default%22,%20pod=\~%22edgedevice-camera-deployment.\*%22}&start=2022-04-20T2:00:30.781Z&end=2022-04-20T2:10:00.781Z&step=60s](http://localhost:9090/api/v1/query_range?query=node_namespace_pod_container:container_cpu_usage_seconds_total:sum_irate{namespace=%22default%22,%20pod=~%22edgedevice-camera-deployment.*%22}&start=2022-04-20T2:00:30.781Z&end=2022-04-20T2:10:00.781Z&step=60s)

**networke**

[http://localhost:9090/api/v1/query_range?query=sum(irate(container_network_transmit_bytes_total{namespace=%22default%22,%20pod=\~%22edgedevice-camera.\*%22}\[30s\]))%20by%20(pod)&start=2022-04-20T2:50:30.781Z&end=2022-04-20T4:00:00.781Z&step=30s](http://localhost:9090/api/v1/query_range?query=sum(irate(container_network_transmit_bytes_total{namespace=%22default%22,%20pod=~%22edgedevice-camera.*%22}[30s]))%20by%20(pod)&start=2022-04-20T2:50:30.781Z&end=2022-04-20T4:00:00.781Z&step=30s)



### **Plc**

M <http://localhost:8090/getcontent?rootaddress=M&address=0> 获取m的值,参数0是addess里的动态值

Q <http://localhost:8090/getcontent?rootaddress=Q&address=0> 获取q的值，参数0是addess里的动态值

T <http://localhost:8090/getcontent?rootaddress=T&address=0> 获取t的值，参数0是addess里的动态值

C <http://localhost:8090/getcontent?rootaddress=C&address=0> 获取c的值，参数0是addess里的动态值

addr代表address里的变量，digit代表digit的值，value代表value的值

发送m \"/sendsinglebit\" +\"?rootaddress=M&address=\" +addr +\"&digit=\" +digit +\"&isset=true\";

发送q \"/sendsinglebit\" +\"?rootaddress=Q&address=\" +addr +\"&digit=\" +digit +\"&isset=true\";

发送t \"/sendsinglebit\" +\"?rootaddress=T&address=\" +addr +\"&digit=\" +digit +\"&isset=true\";

发送c \"/sendsinglebit\" +\"?rootaddress=C&address=\" +addr +\"&digit=\" +digit +\"&isset=true\";



### **Plc 图表（promethus）**

**Ram info**

http://localhost:9090/api/v1/query_range?query=node_namespace_pod_container:container_memory_working_set_bytes{namespace=%22default%22,%20pod=\~%22edgedevice-camera.\*%22,%20image!\~%22.\*pause:.\*%22}&start=2022-04-20T2:00:30.781Z&end=2022-04-20T2:10:00.781Z&step=60s

**Cpu usage**

[http://localhost:9090/api/v1/query_range?query=node_namespace_pod_container:container_cpu_usage_seconds_total:sum_irate{namespace=%22default%22,%20pod=\~%22edgedevice-camera-deployment.\*%22}&start=2022-04-20T2:00:30.781Z&end=2022-04-20T2:10:00.781Z&step=60s](http://localhost:9090/api/v1/query_range?query=node_namespace_pod_container:container_cpu_usage_seconds_total:sum_irate{namespace=%22default%22,%20pod=~%22edgedevice-camera-deployment.*%22}&start=2022-04-20T2:00:30.781Z&end=2022-04-20T2:10:00.781Z&step=60s)

**Network info**

http://localhost:9090/api/v1/query_range?query=sum(irate(container_network_receive_bytes_total{namespace=%22default%22,%20pod=\~%22edgedevice-camera.\*%22}\[30s\]))%20by%20(pod)&start=2022-04-20T2:50:30.781Z&end=2022-04-20T3:20:00.781Z&step=30s
