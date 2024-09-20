
# NestJS File Upload with Cloudinary

This project is a NestJS application that demonstrates how to integrate Cloudinary for file uploads.

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/nestjs-cloudinary-upload.git
   cd nestjs-cloudinary-upload
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a Cloudinary account:
   - Go to [Cloudinary's website](https://cloudinary.com/) and sign up for a free account.
   - Once registered, navigate to your dashboard to find your account details.

4. Set up environment variables:
   - Create a `.env` file in the root of your project
   - Add the following variables with your Cloudinary account details:
     ```
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     ```

5. Start the development server:
   ```
   npm run start:dev
   ```
