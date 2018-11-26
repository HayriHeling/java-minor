package resource;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class User {
    private String firstname;
    private String lastname;
    private String address;
    private String zipcode;
    private String email;
    private String iban;

    public User(String firstname, String lastname, String address, String zipcode, String email, String iban){
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.zipcode = zipcode;
        this.email = email;
        this.iban = iban;
    }
}
