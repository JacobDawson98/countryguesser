locals {
  common_tags = {
    github = "https://github.com/JacobDawson98/countryguesser"
    Name = "countryguesser"
  }
}

variable "environment" {
  type = string

  validation {
    condition = var.environment == "prod"
    error_message = "Environmet must be prod."
  }
}

variable "region" {
  type = string
  default = "us-east-1"
}

variable "domain_name" {
  type = string
  description = "The domain name for the website."
}

variable "bucket_name" {
  type = string
  description = "The name of the bucket without the www. prefix. Normally domain_name."
}
