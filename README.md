# BCR
# Frontend Server
## Setup Server

    cd frontend
    npm install
    
`npm install` diperlukan untuk menginstall semua dependencies yang diperlukan dalam project.  
Apabila diperlukan backend api settings dapat diubah di `frontend/public/config/api.js`

## Running Server

    cd frontend
    npm start

Server frontend secara default akan berjalan di `http://localhost:3000/`  
Port server bisa diganti di dalam file `frontend/server.js`  

## Server Routing
| Page | Route | Default Route |
|--|--|--|
| Homepage | `/` | http://localhost:3000/ |
| Add Car | `/add` | http://localhost:3000/add |
| Edit Car | `/edit?id={carId}` | http://localhost:3000/edit?id={carId} |
 
 

# Backend Server
## Setup Server

    cd backend
    npm install
    
`npm install` diperlukan untuk menginstall semua dependencies yang diperlukan dalam project.
    
Setelah itu pastikan [PostgreSQL](https://www.postgresql.org/download/) sudah ter-install dan berjalan di komputer. Kemudian setup file `backend/src/handler/db-handler/config/config.json` sesuai dengan settings database PostgreSQL yang sedang berjalan. Lanjut jalankan perintah berikut di terminal.

    cd backend/src/handler/db-handler
    sequelize db:create
    sequelize db:migrate
    
    // OPTIONAL: untuk menambahkan dummy data ke DB
    sequelize db:seed:all
    sequelize db:seed:undo // Untuk menghapus dummy data

Berikutnya setup aplikasi dengan akun [Cloudinary](https://cloudinary.com/) dilakukan dengan mengisi *api secrets* akun di file `backend/src/handler/cloudinary.js`

## Running Server

    cd backend
    npm start

Server frontend secara default akan berjalan di `http://localhost:4000/`  
Port server bisa diganti di dalam file `backend/app.js`   

## REST API Endpoints
### Hello World Test

Test untuk memastikan REST API telah berjalan dengan baik.

#### *HTTP Request*
> **GET**   
> `/api`

#### *Default Request URL*

    http://localhost:4000/api

#### *Expected Response*
Response Code: `200`  
Response Type: `application/json`  
Response Body:  

    {
	    "status": "success",
	    "message": "Hello world"
    }

-----------------------
### Get All Car

Mengembalikan array berisi data mobil dari database.

#### *HTTP Request*
> **GET**   
> `/api/cars`

#### *Default Request URL*

    http://localhost:4000/api/cars

#### *Expected Response*
Response Code: `200`  
Response Type: `application/json`  
Response Body:  

    {
    	"status": "success",
    	"message": "Get all car data successfully",
    	"data": [
    		{
    			"id": number,
    			"name": string,
    			"size": string,
    			"rent_per_day": number,
    			"image_id": string,
    			"image_url": string,
    			"createdAt": timestamp,
    			"updatedAt": timestamp
    		}
    	]
    }

-----------------------
### Get Car with ID

Mengembalikan data car berdasarkan dengan ID dari database.

#### *HTTP Request*
> **GET**   
> `/api/cars/{carId}`

#### *Default Request URL*

    http://localhost:4000/api/cars/{carId}

#### *Expected Response*
Response Code: `200`  
Response Type: `application/json`   
Response Body:  

    {
    	"status": "success",
    	"message": "Get car data with id={carId} successfully",
    	"data": {
    		"id": number,
    		"name": string,
    		"size": string,
    		"rent_per_day": number,
    		"image_id": string,
    		"image_url": string,
    		"createdAt": timestamp,
    		"updatedAt": timestamp
    	}
    }

-----------------------
### Add New Car 

Menambahkan data mobil baru ke database.

#### *HTTP Request*
> **POST**   
> `/api/cars/`

#### *Default Request URL*

    http://localhost:4000/api/cars

#### *Expected Request*
Request Type: `application/json`  
Request Body:   

    {
    	"name": string,
    	"size": string,
    	"rentPerDay": number,
    	"imageId": string,
    	"imageUrl": string,
    }


#### *Expected Response*
Response Code: `201`   
Response Type: `application/json`   
Response Body:  

    {
    	"status": "success",
    	"message": "Add data successfully"
    }

-----------------------
### Add Car Image to Cloudinary

Meng-upload car image ke Cloudinary lalu mengembalikan *public_id* dan *url* nya.

#### *HTTP Request*
> **POST**   
> `/api/cars/picture/cloudinary`

#### *Default Request URL*

    http://localhost:4000/api/cars/picture/cloudinary

#### *Expected Request*
Request Type: `multipart/form-data`   
Request Body:   

    picture: file


#### *Expected Response*
Response Code: `201`   
Response Type: `application/json`   
Response Body:   

    {
    	"status": "success",
    	"message": "Upload image successfully",
    	"url": string,
    	"public_id": string
    }

-----------------------
### Edit Car Data with ID 

Mengedit data car berdasarkan ID nya di database.

#### *HTTP Request*
> **PUT**   
> `/api/cars/{carId}`

#### *Default Request URL*

    http://localhost:4000/api/cars/{carId}

#### *Expected Request*
Request Type: `application/json`   
Request Body:   

    {
    	"name": string,
    	"size": string,
    	"rentPerDay": number,
    	"editImg": boolean,
    	"imageId": string, // OPTIONAL, if editImg = false
    	"imageUrl": string, // OPTIONAL, if editImg = false
    }


#### *Expected Response*
Response Code: `200`    
Response Type: `application/json`   
Response Body:   

    {
    	"status": "success",
    	"message": "Edit data with id={carId} successfully"
    }

-----------------------
### Delete Car with ID

Menghapus data car berdasarkan dengan ID dari database.

#### *HTTP Request*
> **DELETE**   
> `/api/cars/{carId}`

#### *Default Request URL*

    http://localhost:4000/api/cars/{carId}

#### *Expected Response*
Response Code: `200`   
Response Type: `application/json`   
Response Body:   

    {
        "status": "success",
        "message": "Delete data with id={carId} successfully"
    }

-----------------------

# Database Design
  
![Diagram model data yang digunakan](./readme-files/db-diagram.png) 

