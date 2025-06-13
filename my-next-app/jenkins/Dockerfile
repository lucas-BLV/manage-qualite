FROM jenkins/jenkins:lts

USER root
RUN apt-get update && apt-get install -y curl git

# Installer Node et SonarScanner
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs unzip

# Installer Sonar Scanner
RUN curl -o /tmp/sonar.zip -L https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip && \
    unzip /tmp/sonar.zip -d /opt && \
    ln -s /opt/sonar-scanner-*/bin/sonar-scanner /usr/local/bin/sonar-scanner

USER jenkins
