provider "aws" {
  
  region = var.Region

}

resource "aws_instance" "instance" {
  ami           = var.ami
  instance_type = var.instance_type

  tags = {
    
    Name = "${var.instanceTagName}"
  }

}



