podman pod create --name gitea -p 3000:3000 -p 2222:22
podman build -t gitea-db -f Dockerfile.gitea-db
podman run -it --pod gitea --name gitea-db --restart=always -v gitea-db-volume:/var/lib/mysql:Z 8aecbdb03177

# -<IMAGE ID>

podman build -t gitea-app -f Dockerfile.gitea-app
podman run --pod gitea --name gitea-app --restart=always -v gitea-data-volume:/var/lib/gitea:Z -v gitea-config-volume:/etc/gitea:Z 27078773c327

# ------------------------------<IMAGE ID>

podman generate systemd --files --name gitea
