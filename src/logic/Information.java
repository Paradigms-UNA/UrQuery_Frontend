package com.una.pp.Urquery_Backend.logic;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class Information {

    public String members() throws FileNotFoundException {
        String data = String.valueOf(new FileReader("JSONFile.json"));
        return data;
    }
}
