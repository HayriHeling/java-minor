package resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class LaptopController {
    @RequestMapping(path = "/api/laptops", method = RequestMethod.GET)
    public Laptop returnLaptops()
    {
        ArrayList<Laptop> laptops = new ArrayList<>();

        laptops.add(new Laptop(1, 100, "HP Pavillion", "Grijs", 200, 8, "i5"));
        laptops.add(new Laptop(2, 200, "Asus", "Grijs", 200, 8, "i5"));
        laptops.add(new Laptop(3, 300, "Acer", "Grijs", 200, 8, "i5"));

        for(Laptop laptop: laptops){
            return laptop;
        }

        return null;
    }
}
