package com.una.pp.Urquery_Backend.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/una")
@RestController
public class Controller {

    @GetMapping
    public String about() {  //despliega un json con la informacion de los integrantes
        return "";
        //Service.
    }




}
