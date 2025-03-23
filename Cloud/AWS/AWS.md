# AWS global infrastructure
* AWS Regions.
* AWS Availability Zones.
* AWS Data Centers.

* AWS Edge Locations/ Points of Presence.
  * https://infrastructure.aws/

<br/>

* Generally services are linked to a specific region.
  * Like if you use a service in one region and then same service in other, it would like using new service.

<br/>

## How to choose an ***AWS Region***?
* ***Compliance***: data governance & legal requirements.
* ***Proximity*** to customers: reduce latency.
* Availability: Is the required service is available in the specified region.
* ***Pricing***: Varies from region to region.

<br/><br/>

# AWS Availability Zones (AZ)
* Each region has usually ***3 to 6*** Availability Zones.

<br/><br/>

# IAM
* ***inline policy***: to ***directly*** attach ***granular*** policy.

* Like on access only one of the specific s3 bucket.

<br/><br/>

# AWS CloudShell
* Usecase: to use aws CLI without access & secret keys.

* You can also add `--region` in cloudshell cmd to run cmd in specific region.
* You can also upload & download files in CloudShell.

<br/>

## Role
* To give other aws services/entities permissions.

<br/>

## ec2-user
* Default user created by AMI.

<br/>

## SSH
* It allows you to control a machine/ virtual server/ ec2 instance remotely all using the CLI.

<br/>

## To connect to ec2 user through SSH through local terminal
1. You should have .pem file.
   * `ls`.

2. Go to the directory where .pem file is present.
   * `cd github-techCommunity/aws-ccp/`.
3. Check & remove unneccesary permissions from the .pem file.
   * `ls -ld <pemFileName>.pem`.
   * `chmod 0400 <pemFileName>.pem`.
4. Connect to ec2 instance:
   * `ssh -i <pemFileName>.pem ec2-user@<Public-IP>`.
5. To disconnect:
   * `exit`.
   * `ctrl + D`.

<br/>

### Never enter you creds/accesskey/secretAccessKey in instance connected through terminal/CLI.

<br/>

### Types of storage that can be attached to EC2 instance.
1. EBS (Elastic Block Store).
2. EC2 Instance Store.
3. EFS (Elastic File System).
      * FSx (3rd party high-performance File System).

<br/>

## AWS S3 Replication
* Copying is asynchronous.
### 1. CRR
* Cross-region replication.

### 2. SRR
* Same-region replication.

<br/>

# Types of DB on AWS
1. Relational databases.
2. Amazon ElastiCache.
3. NoSQL databases.
4. Redshift (OLAP).
5. Amazon EMR (Elastic MapReduce).
6. Amazon Neptune.
7. Amazon Timestream.
8. Amazon Managed Blockchain.

* Amazon Athena.
* Amazon QuickSight.
* AWS Glue.

<br/>

## To create Relational databases on AWS:
* RDS.
* Aurora.

<br/>

# To launch docker container on AWS
* ESC.
* Fargate.