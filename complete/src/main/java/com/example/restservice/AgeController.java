package com.example.restservice;

import java.time.LocalDate;
import java.time.Period;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5175") // <--- permite peticiones desde React
public class AgeController {

    @Cacheable(value = "age", key = "#fechaNacimiento", unless = "#result == null")
    @GetMapping("/age")
    public AgeResponse calcularEdad(@RequestParam String fechaNacimiento) {
        System.out.println("⏳ Calculando edad para: " + fechaNacimiento); // Se imprime solo si no está en caché

        LocalDate nacimiento = LocalDate.parse(fechaNacimiento); // formato yyyy-MM-dd
        int edad = Period.between(nacimiento, LocalDate.now()).getYears();

        return new AgeResponse(fechaNacimiento, edad);
    }
}
