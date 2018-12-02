package resource;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class Laptop {
    private int id;
    private int price;
    private int buildyear;
    private int storage;
    private int ram;
    private String cpu;
    private String brand;
    private String color;

    public Laptop(int id, int price, String brand, int buildyear, String color, int storage, int ram, String cpu) {
        this.id = id;
        this.price = price;
        this.brand = brand;
        this.buildyear = buildyear;
        this.color = color;
        this.storage = storage;
        this.ram = ram;
        this.cpu = cpu;
    }
}
