package resource;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;

@Data
@AllArgsConstructor

public class LaptopOptions {
    private ArrayList<String> color = new ArrayList<>();
    private ArrayList<String> cpu = new ArrayList<>();
    private ArrayList<Integer> storage = new ArrayList<>();
    private ArrayList<Integer> ram = new ArrayList<>();

    public LaptopOptions(){
        //Alle lijsten met waardes vullen
        color.add("Grijs");
        color.add("Zwart");
        color.add("Wit");

        cpu.add("i3");
        cpu.add("i5");
        cpu.add("i7");

        storage.add(100);
        storage.add(220);
        storage.add(500);

        ram.add(2);
        ram.add(4);
        ram.add(8);
    }
}
