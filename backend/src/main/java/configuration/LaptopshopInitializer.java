package configuration;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class LaptopshopInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    protected String[] getServletMappings() {
        return new String[]{"/api/laptops"};
    }

    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{LaptopshopWebconfig.class};
    }

    protected Class<?>[] getServletConfigClasses() {
        return null;
    }
}
