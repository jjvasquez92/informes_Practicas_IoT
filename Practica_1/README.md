# **Práctica 1: Configuración de entorno y red**

Aunque Internet hace parte de la vida diaria, no todos comprenden cómo funciona la comunicación por medio de esta red, la comprensión del protocolo IP, su importancia en el contexto de comunicación de cualquier servicio, la diferencia entre protocolos TCP y UDP la conveniencia según el tipo de servicio es útil para la diseño e implementación de servicios en la IoT.

Es de particular interés la comprensión de que es el protocolo TCP/IP que es la base de internet.

Debido a las necesidades de esta y las siguientes prácticas, para configurar un ambiente funcional en linux donde utilizan herramientas como Github y Docker, que implican la comprensión de algunos conceptos básicos se considera también como un componente de la práctica.

## **Objetivos de la práctica**

Con el desarrollo de la práctica se espera que el estudiante aprenda como:

1. Crear un entorno Linux virtual para evaluar servicios empleando herramientas como VirtualBox, Github y Docker.
2. Identificar en Linux mecanismos para la identificación de ocupación de puertos y a qué servicio está relacionado
3. Implementar un pequeño servicio cliente/servidor en Python empleando TCP y UDP, a partir de ello establezca cual es más adecuado para algunos contextos que le serán planteados.

## **Desarrollo de la práctica**

1. Configuración del entorno: El estudiante deberá configurar su dispositivo de elección para ejecutar una imagen virtualizada de Linux, este será un suministro importante para el resto de prácticas.

En este punto, ya se cuenta con el sistema operativo de Linux (Debian 11)

2. Instalar docker

![docker](imagenes/docker1.png)
![docker](imagenes/docker2.png)
![docker](imagenes/docker3.png)
![docker](imagenes/docker4.png)
![docker](imagenes/docker5.png)
![docker](imagenes/docker6.png)
![docker](imagenes/docker7.png)
![docker](imagenes/docker8.png)
![docker](imagenes/docker9.png)


3. Reconocimiento de herramientas de red: Identificar configuración de red por medio del comando ip e ifconfig. Identificar servicios y puertos ocupados en el sistema con los comandos ss, netstat y lsof.

![config](imagenes/ipconfig.png)
![config](imagenes/ipAddress.png)
![config](imagenes/net-tools.png)
![config](imagenes/netstat.png)
![docker](imagenes/lsof.png)


4. Identificar servicios desplegados: El estudiante deberá identificar 5 servicios diferentes listados por las herramientas de red y determinar a qué aplicaciones posiblemente están relacionados.

![servicios](imagenes/servicios.png)

**systemd**: systemd es un conjunto de demonios o daemons de administración de sistema, bibliotecas y herramientas diseñados como una plataforma de administración y configuración central para interactuar con el núcleo del Sistema operativo GNU/Linux.

**kthreadd**: es el demonio de subprocesos del kernel. ... La creación de nuevos subprocesos del kernel se realiza a través de kthreadd para que se obtenga un entorno limpio incluso si el espacio de usuario lo invocara mediante modprobe, hotplug cpu, etc. 

**ksoftirqd**: Su ordenador se comunica con los dispositivos conectados a él a través de las IRQ (solicitudes de interrupción). Cuando una interrupción proviene de un dispositivo, el sistema operativo hace una pausa en lo que estaba haciendo y comienza a dirigir esa interrupción.

**[rcu_sched]**el programador de actualización de lectura y copia que sincroniza datos entre escritores y lectores.

**[migration/0]** Distribuye los procesos entre los núcleos . Uno de esos procesos por núcleo. [watchdog/0]Comprueba para asegurarse de que el sistema aún se está ejecutando y, con suerte, se reinicia si se bloquea.

5. Evaluar scripts en Python: Al estudiante se le entregarán scripts en Python para desplegar un ejemplo de cliente servidor con protocolos TCP y UDP, el estudiante evaluará el rendimiento de los dos servicios y debe descubrir la ocupación de los puertos por medio de las herramientas previamente estudiadas.

**TCP**

![TCP](imagenes/serverTCP.png)

Con el comando podemos verificar que el puerto de escucha en este caso es el 10000


![TCP](imagenes/lsof-i.png)
![TCP](imagenes/cliente_tcp.png)
![TCP](imagenes/SERVER_TCP_PORT.png)

**UDP**

![udp](imagenes/server_udp.png)

Con el comando podemos verificar que el puerto de escucha en este caso es el 10000

![udp](imagenes/lsof_udp.png)
![udp](imagenes/cliente_udp.png)
![udp](imagenes/server_udp2.png)