FROM openjdk:8
COPY --from=build /target/trainbackend-0.0.1-SNAPSHOT.jar trainbackend-0.0.1-SNAPSHOT.jar
EXPOSE 8787
ENTRYPOINT ["java","-jar","/trainbackend-0.0.1-SNAPSHOT.jar"]