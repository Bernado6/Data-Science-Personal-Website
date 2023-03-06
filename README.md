# Benard Kipngeno Portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployment(Hosted in AWS s3 Bucket)

### AWS Architectural Diagram
![Architecture Diagram](https://github.com/Bernado6/Final-Personal-Website/blob/master/src/assets/Architecture%20Diagram.png)

 Below are the detailed steps to host a static React website in AWS S3 and access it only through CloudFront:

1. **Create a private S3 bucket to host your static website:**

    * Go to the AWS Management Console and navigate to Services>Storage>S3.
    ![S3](https://github.com/Bernado6/Final-Personal-Website/blob/master/src/assets/s3-1.png)
    * Click on the "Create bucket" button and give your bucket a unique name and   choose your desired region.
    ![Create bucket](https://github.com/Bernado6/Final-Personal-Website/blob/master/src/assets/s3-2.png)

    ![unique name](https://github.com/Bernado6/Final-Personal-Website/blob/master/src/assets/s3-3.png)
    * In the "Block Public Access settings for this bucket" keep the default    settings to ensure that the bucket is private.
    * Keep other default settings and click on the "Create bucket" button at the end.
2. **Upload your React website files to the S3 bucket:**
    
    * Option 1
        * Select the bucket that you created in the previous step.
        * Click on the "Upload" button and select the files you want to upload.
        * Keep the default settings and click on the "Upload" button.

    * Option 2, Upload using CLI
        * Given that you have allowed programmatic access, you can use the command below;
            * First confirm that you can access your aws account by checking the buckets you have using the command;
            ```{bash}
            aws s3 ls # this will list all the buckets in your aws account
            ```
            * Command to upload build folder;
            ```{bash}
            aws s3 sync build/ s3://bucket-name
            ```

3. **Configure the S3 bucket to disallow public access to the website files:**

    * Select the bucket that you uploaded your website files to.
    * Click on the "Permissions" tab and scroll down to the "Bucket Policy" section.
    * Click on the "Edit" button to open the bucket policy editor.
    * Enter the following bucket policy to disallow public access to your website files:
        json
        ```{json}
        {
        "Version": "2012-10-17",
        "Statement": [
            {
            "Effect": "Deny",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
            }
        ]
        }
        ```
    Replace your-bucket-name with the name of the bucket you created in step 1.

    * Click on the "Save" button to save the bucket policy.
4. **Create a CloudFront distribution for your website:**

    * Go to the AWS Management Console and navigate to the CloudFront service.
    * Click on the "Create Distribution" button and choose "Web".
    * In the "Origin Domain Name" field, select your S3 bucket from the dropdown list.
    * Keep the default settings and click on the "Create Distribution" button.
5. **Configure CloudFront to use your S3 bucket as the origin for your website:**

    * Select the CloudFront distribution that you created in the previous step.
    * Click on the "Behaviors" tab and click on the "Create Behavior" button.
    * Enter the following settings:
        * Path Pattern: *
        * Origin: Select your S3 bucket from the dropdown list
        * Viewer Protocol Policy: Redirect HTTP to HTTPS
    * Click on the "Create" button to save the behavior.
6. Set up CloudFront to serve your website over HTTPS:

    * Select the CloudFront distribution that you created in step 4.
    * Click on the "General" tab and scroll down to the "SSL Certificate" section.
    * Choose "Custom SSL Certificate" and select or upload your SSL certificate.
    * Click on the "Save Changes" button to save the SSL certificate.
7. Use the CloudFront domain name to access your website:

    * Go to the AWS Management Console and navigate to the CloudFront service.
    * Select the CloudFront distribution that you created in step 4.
    * Click on the "General" tab and copy the "Domain Name".
    * Paste the CloudFront domain name into your web browser to access your website.

By following these detailed steps, you can host your static React website in AWS S3 and access it securely only through CloudFront as shown below. This will help you to serve your website content faster and more securely to users around the world.

### Accessing my website portfolio through Cloudfront DNS
![Website](https://github.com/Bernado6/Final-Personal-Website/blob/master/src/assets/Website.png)