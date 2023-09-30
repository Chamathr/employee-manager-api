## Getting Started

1. Clone this repository -> git clone https://github.com/Chamathr/employee-manager-api.git

2. Navigate to the project directory -> cd employee-manager-api

3. Install the dependencies -> npm install

4. To run the app you can use one of below methods:
    a. To run the app locally, use the following command -> npm run dev

    b. To build the app for production and run, use the following commands ->
        i. npm run build
        ii. npm run start
    
    c. To run the app with Docker ->
        i. Build the Docker image -> docker build -t <image-name>:<tag-name> .
        ii. Run the Docker image -> docker run -p 8000:8000 -d <image-name>:<tag-name>

4. Open [http://localhost:8000/api/v1/api-docs] with your browser to see the swagger environment.

