package com.example.tmdeveloper.Compiler;

import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class PistonPostTest {
    public static void main(String[] args) {
        try {
            // Piston API endpoint
            String urlString = "https://emkc.org/api/v2/piston/execute";
            URL url = new URL(urlString);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            // Set request method to POST
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setDoOutput(true);

            // JSON payload for execution (Example: Running Python code)
            String jsonInput = "{"
                    + "\"language\": \"python\","
                    + "\"version\": \"3.10.0\","
                    + "\"files\": [{\"name\": \"main.py\", \"content\": \"print('Hello from Piston!')\"}]"
                    + "}";

            // Write JSON input to the request body
            try (OutputStream os = conn.getOutputStream()) {
                byte[] input = jsonInput.getBytes(StandardCharsets.UTF_8);
                os.write(input, 0, input.length);
            }

            // Read response
            int responseCode = conn.getResponseCode();
            System.out.println("Response Code: " + responseCode);
            if (responseCode == HttpURLConnection.HTTP_OK) {
                try (java.util.Scanner scanner = new java.util.Scanner(conn.getInputStream(), StandardCharsets.UTF_8.name())) {
                    System.out.println("Response: " + scanner.useDelimiter("\\A").next());
                }
            } else {
                System.out.println("Error: Failed to connect to Piston API.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}