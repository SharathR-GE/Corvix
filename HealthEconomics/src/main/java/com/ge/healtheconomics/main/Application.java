package com.ge.healtheconomics.main;

import org.apache.catalina.Context;
import org.apache.catalina.connector.Connector;
import org.apache.tomcat.util.descriptor.web.SecurityCollection;
import org.apache.tomcat.util.descriptor.web.SecurityConstraint;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.EmbeddedServletContainerFactory;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.util.SocketUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Primary;

@SpringBootApplication
@ConfigurationProperties
@EnableCaching
@ComponentScan(basePackages = { "com.ge.healtheconomics" })
public class Application {

	// @Bean
	// public Integer port() {
	// return SocketUtils.findAvailableTcpPort();
	// }
	//
	// @Bean
	// public EmbeddedServletContainerFactory servletContainer() {
	// TomcatEmbeddedServletContainerFactory tomcat = new
	// TomcatEmbeddedServletContainerFactory();
	// tomcat.addAdditionalTomcatConnectors(createStandardConnector());
	// return tomcat;
	// }
	//
	// private Connector createStandardConnector() {
	// Connector connector = new
	// Connector("org.apache.coyote.http11.Http11NioProtocol");
	// connector.setPort(80);
	// return connector;
	// }

	// @Bean
	// public EmbeddedServletContainerFactory servletContainer() {
	// TomcatEmbeddedServletContainerFactory tomcat = new
	// TomcatEmbeddedServletContainerFactory() {
	// @Override
	// protected void postProcessContext(Context context) {
	// SecurityConstraint securityConstraint = new SecurityConstraint();
	// securityConstraint.setUserConstraint("CONFIDENTIAL");
	// SecurityCollection collection = new SecurityCollection();
	// collection.addPattern("/*");
	// securityConstraint.addCollection(collection);
	// context.addConstraint(securityConstraint);
	// }
	// };
	//
	// tomcat.addAdditionalTomcatConnectors(initiateHttpConnector());
	// return tomcat;
	// }
	//
	// private Connector initiateHttpConnector() {
	// Connector connector = new
	// Connector("org.apache.coyote.http11.Http11NioProtocol");
	// connector.setScheme("http");
	// connector.setPort(80);
	// connector.setSecure(false);
	// connector.setRedirectPort(443);
	//
	// return connector;
	// }

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	// JDK Cache Manager
	@Primary
//	@Bean
//	public CacheManager jdkCacheManager() {
//		return new ConcurrentMapCacheManager("pop");
//	}
	
	@Bean
	public CacheManager jdkCacheManager2() {
		return new ConcurrentMapCacheManager();
	}
}
