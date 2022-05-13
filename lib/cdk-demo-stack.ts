import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

// import the classes from the module
import { SubnetType } from '@aws-cdk/aws-ec2';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkDemoQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // create the vpc object from the Vpc class
    const vpc = new ec2.Vpc(this, 'MainVpc', {
      //define how many AZs to use
      maxAzs: 2,

      // define a single subnet configuration per AZ
      subnetConfiguration: [
        {
          // this is it's CIDR mask so 255.255.255.0
          cidrMask: 24,
          // a name for each of these subnets
          name: 'public-subnet',
          // the subnet type to be used - here we will have a public subnet.
          subnetType: SubnetType.PUBLIC
        },
      ]
    });
  }
}
