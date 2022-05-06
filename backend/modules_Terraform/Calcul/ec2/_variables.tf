variable "Region" {
  description = "The AWS region"
  default     = "%us-east-1%"

}

variable "ami" {
  description = "The AMI (Amazon Machine Image) that identifies the instance"
  default     = "%ami%"
}

variable "instance_type" {
  description = "The instance type to be used"
  default     = "t2.micro"
}


variable "instanceTagName" {
  description = "instanceTagName"
  default     = "EC2-instance-created-with-terraform"
}











