class EmployeeSwagger {

    /*employee swagger*/
    public static Employee = {
        "post": {
            "summary": "Add employee",
            "operationId": "add-employee",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "first_name": {
                                    "type": "string",
                                },
                                "last_name": {
                                    "type": "string",
                                },
                                "email": {
                                    "type": "string",
                                },
                                "number": {
                                    "type": "string",
                                },
                                "gender": {
                                    "type": "string",
                                }
                            },
                        },
                    },
                },
            },
            "responses": {
                "201": {
                    "description": "Data added successfully",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "status": {
                                type: "string",
                                description: "Response status code",
                            },
                            "message": {
                                type: "string",
                                description: "Response message",
                            },
                            "data": {
                                type: "string",
                                description: "Response data",
                            },
                        },
                    },
                },
                "400": {
                    "description": "Bad Request",
                },
                "401": {
                    "description": "Unauthorized",
                },
                "500": {
                    "description": "Internal Server Error",
                },
            }
        },
        "get": {
            "summary": "Get all employees",
            "parameters": [
                {
                    "name": "page",
                    "in": "query",
                    "description": "Page number",
                    "required": true,
                    "type": "integer"
                },
                {
                    "name": "search",
                    "in": "query",
                    "description": "Search value",
                    "required": false,
                    "type": "string"
                }
            ],
            "operationId": "get-all-employees",
            "responses": {
                "200": {
                    "description": "Data fetched successfully",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "status": {
                                type: "string",
                                description: "Response status code",
                            },
                            "message": {
                                type: "string",
                                description: "Response message",
                            },
                            "data": {
                                type: "string",
                                description: "Response data",
                            },
                        },
                    },
                },
                "400": {
                    "description": "Bad Request",
                },
                "401": {
                    "description": "Unauthorized",
                },
                "500": {
                    "description": "Internal Server Error",
                },
            }
        },
    }

    /*employee swagger with id parameter*/
    public static EmployeeId = {
        "put": {
            "summary": "Update employee",
            "operationId": "update-employee",
            "parameters": [
                {
                    "name": "empId",
                    "in": "path",
                    "description": "Id",
                    "required": true,
                    "type": "string",
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "first_name": {
                                    "type": "string",
                                },
                                "last_name": {
                                    "type": "string",
                                },
                                "email": {
                                    "type": "integer",
                                },
                                "number": {
                                    "type": "integer",
                                },
                                "gender": {
                                    "type": "integer",
                                }
                            },
                        },
                    },
                },
            },
            "responses": {
                "200": {
                    "description": "Data updated successfully",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "status": {
                                type: "string",
                                description: "Response status code",
                            },
                            "message": {
                                type: "string",
                                description: "Response message",
                            },
                            "data": {
                                type: "string",
                                description: "Response data",
                            },
                        },
                    },
                },
                "400": {
                    "description": "Bad Request",
                },
                "401": {
                    "description": "Unauthorized",
                },
                "500": {
                    "description": "Internal Server Error",
                },
            }
        },
        "delete": {
            "summary": "Delete employee",
            "operationId": "delete-employee",
            "parameters": [
                {
                    "name": "empId",
                    "in": "path",
                    "description": "Id",
                    "required": true,
                    "type": "string",
                }
            ],
            "responses": {
                "200": {
                    "description": "Data deleted successfully",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "status": {
                                type: "string",
                                description: "Response status code",
                            },
                            "message": {
                                type: "string",
                                description: "Response message",
                            },
                            "data": {
                                type: "string",
                                description: "Response data",
                            },
                        },
                    },
                },
                "400": {
                    "description": "Bad Request",
                },
                "401": {
                    "description": "Unauthorized",
                },
                "500": {
                    "description": "Internal Server Error",
                },
            }
        },
        "get": {
            "summary": "Get employee by id data",
            "operationId": "get-employee-by-id",
            "parameters": [
                {
                    "name": "empId",
                    "in": "path",
                    "description": "Id",
                    "required": true,
                    "type": "string",
                }
            ],
            "responses": {
                "200": {
                    "description": "Data fetched successfully",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "status": {
                                type: "string",
                                description: "Response status code",
                            },
                            "message": {
                                type: "string",
                                description: "Response message",
                            },
                            "data": {
                                type: "string",
                                description: "Response data",
                            },
                        },
                    },
                },
                "400": {
                    "description": "Bad Request",
                },
                "401": {
                    "description": "Unauthorized",
                },
                "500": {
                    "description": "Internal Server Error",
                },
            }
        }
    }

    /*update employee by id*/
    public static updateEmployee = {
        "put": {
            "summary": "Update employee",
            "operationId": "update-employee",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "description": "Id",
                    "required": true,
                    "type": "string",
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "first_name": {
                                    "type": "string",
                                },
                                "last_name": {
                                    "type": "string",
                                },
                                "email": {
                                    "type": "integer",
                                },
                                "number": {
                                    "type": "integer",
                                },
                                "gender": {
                                    "type": "integer",
                                }
                            },
                        },
                    },
                },
            },
            "responses": {
                "200": {
                    "description": "Data updated successfully",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "status": {
                                type: "string",
                                description: "Response status code",
                            },
                            "message": {
                                type: "string",
                                description: "Response message",
                            },
                            "data": {
                                type: "string",
                                description: "Response data",
                            },
                        },
                    },
                },
                "400": {
                    "description": "Bad Request",
                },
                "401": {
                    "description": "Unauthorized",
                },
                "500": {
                    "description": "Internal Server Error",
                },
            }
        }
    }
}


export { EmployeeSwagger }