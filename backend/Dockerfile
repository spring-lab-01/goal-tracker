FROM public.ecr.aws/docker/library/openjdk:latest
VOLUME /tmp
COPY build/libs/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]