provider "docker" {}

resource "docker_image" "gt" {
  name         = "hkchauhan022/gt:latest"
  keep_locally = false
}

resource "docker_container" "gt" {
  image = docker_image.gt.image_id
  name  = "goal-tracker"
  ports {
    internal = 8081
    external = 8081
  }
}