FROM jenkins/jenkins:lts

USER root

# Installer les dépendances nécessaires
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    openjdk-17-jre \
    gnupg \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Installer Node.js (v20)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get update && apt-get install -y nodejs && \
    npm install -g npm && \
    rm -rf /var/lib/apt/lists/*

# Installer SonarScanner CLI
ENV SONAR_SCANNER_VERSION=5.0.1.3006
RUN curl -o /tmp/sonar.zip -L "https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-${SONAR_SCANNER_VERSION}-linux.zip" && \
    unzip /tmp/sonar.zip -d /opt && \
    ln -s "/opt/sonar-scanner-${SONAR_SCANNER_VERSION}-linux/bin/sonar-scanner" /usr/local/bin/sonar-scanner && \
    rm /tmp/sonar.zip

# Définir JAVA_HOME (important pour sonar-scanner)
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$PATH:/opt/sonar-scanner-${SONAR_SCANNER_VERSION}-linux/bin

USER jenkins
