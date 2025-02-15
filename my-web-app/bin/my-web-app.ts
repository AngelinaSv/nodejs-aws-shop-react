#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { StaticWebsiteStack } from '../lib/my-web-app-stack';

const app = new cdk.App();
new StaticWebsiteStack(app, 'MyWebAppStack');