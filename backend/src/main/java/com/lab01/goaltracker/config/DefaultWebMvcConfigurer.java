package com.lab01.goaltracker.config;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.resource.ResourceResolverChain;

import java.util.List;

@Configuration
class DefaultWebMvcConfigurer implements WebMvcConfigurer {
    // Register resource handler for all paths,
    // get resources from classpath:/static/,
    // use IndexFallbackResourceResolver for that
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .resourceChain(true)
                .addResolver(new IndexFallbackResourceResolver());
    }

    static class IndexFallbackResourceResolver extends PathResourceResolver {
        @Override
        protected Resource resolveResourceInternal(HttpServletRequest request, String requestPath,
                                                   List<? extends Resource> locations,
                                                   ResourceResolverChain chain) {
            // Give PathResourceResolver a chance to resolve a resource on its own.
            Resource resource = super.resolveResourceInternal(request, requestPath, locations, chain);
            if (resource == null) {
                // If resource wasn't found, use index.html file.
                resource = super.resolveResourceInternal(request, "index.html", locations, chain);
            }
            return resource;
        }
    }
}