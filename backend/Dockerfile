FROM fedora:28

WORKDIR /opt/backend
COPY ./ ./

RUN dnf -y update 
RUN dnf -y install nodejs npm
RUN dnf clean all
RUN npm install

EXPOSE 3001

CMD /bin/bash



