FROM public.ecr.aws/docker/library/openjdk:latest
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]