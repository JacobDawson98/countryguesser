terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~>3.42.0"
    }
  }
  backend "s3" {
    bucket = "countryguesser-terraform"
    key = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = "us-east-1"
}
