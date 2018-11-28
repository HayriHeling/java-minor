package resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LaptopController {
    @RequestMapping(path = "/api/laptops", method = RequestMethod.GET)
    public Laptop returnLaptops(){
        return new Laptop(1, 100, "HP Pavillion", "Grijs", 200, 8, "i5");
    }
}
