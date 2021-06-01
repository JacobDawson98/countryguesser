terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~>3.42.0"
    }
  }
  backend "s3" {
    bucket = "countryguesser-terraform"
    key = "${var.environment}/terraform.tfstate"
    region = var.region
  }
}

provider "aws" {
  region = var.region
}
