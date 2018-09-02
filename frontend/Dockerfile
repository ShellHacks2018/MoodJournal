FROM fedora:28

WORKDIR /opt/frontend
COPY ./ ./

RUN dnf -y update
RUN dnf -y install nodejs npm
RUN dnf clean all
RUN npm install

EXPOSE 3000

CMD /bin/bash



