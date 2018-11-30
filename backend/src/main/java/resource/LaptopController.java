package resource;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
public class LaptopController {
    @RequestMapping(value = "/api/laptops", method = RequestMethod.GET)
    public ArrayList<Laptop> returnLaptops()
    {
        ArrayList<Laptop> laptops = new ArrayList<>();

        laptops.add(new Laptop(1, 450, "HP Pavillion", 2010,"Grijs", 100, 4, "i3"));
        laptops.add(new Laptop(2, 700, "Asus", 2014,"Zwart", 220, 8, "i5"));
        laptops.add(new Laptop(3, 950, "Acer", 2016,"Wit", 500, 8, "i7"));

        return laptops;
    }

    @RequestMapping(value = "/api/laptops/{id}", method = RequestMethod.GET)
    public Laptop returnLaptop(@PathVariable("id") int id){
        ArrayList<Laptop> laptops = returnLaptops();

        return laptops.get(id - 1);
    }
}
