import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Accordion, { AccordionItem } from '../components/ui/Accordion';
import CodeBlock from '../components/ui/CodeBlock';

export default function Annotations() {
  const [activeSection, setActiveSection] = useState('spring-core');

  const sections = [
    { id: 'spring-core', label: 'Spring Core', icon: '🌱', color: 'from-green-500 to-emerald-600' },
    { id: 'spring-boot', label: 'Spring Boot', icon: '🚀', color: 'from-blue-500 to-indigo-600' },
    { id: 'rest', label: 'REST Controller', icon: '🌐', color: 'from-purple-500 to-violet-600' },
    { id: 'exception', label: 'Exception Handling', icon: '⚠️', color: 'from-red-500 to-rose-600' },
    { id: 'jpa', label: 'JPA / Hibernate', icon: '🗄️', color: 'from-cyan-500 to-teal-600' },
    { id: 'transaction', label: 'Transactions', icon: '💾', color: 'from-amber-500 to-orange-600' },
    { id: 'aop', label: 'Spring AOP', icon: '🎯', color: 'from-lime-500 to-green-600' },
    { id: 'security', label: 'Spring Security', icon: '🔐', color: 'from-yellow-500 to-amber-600' },
    { id: 'validation', label: 'Validation', icon: '✅', color: 'from-pink-500 to-rose-600' },
    { id: 'java-core', label: 'Core Java', icon: '☕', color: 'from-orange-500 to-red-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Java & Spring Annotations"
        description="Complete guide to all important annotations with examples and best practices"
        gradient="green"
      />

      {/* Section Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-3 min-w-max pb-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                activeSection === section.id
                  ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                  : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-700'
              }`}
            >
              <span>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Spring Core Annotations */}
      {activeSection === 'spring-core' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl">
              🌱
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Spring Core Annotations</h2>
              <p className="text-dark-500 dark:text-dark-400">Bean creation and Dependency Injection</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="@Component" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Marks a class as a Spring-managed component (bean). Spring automatically detects and registers it during component scanning.
                  </p>
                </div>
                <CodeBlock code={`// Basic usage - Spring creates and manages this bean
@Component
public class EmailService {
    public void sendEmail(String to, String message) {
        // Send email logic
    }
}

// With custom bean name
@Component("customEmailService")
public class EmailService {
    // ...
}

// Spring internally registers it as:
// Bean name: "emailService" (class name with lowercase first letter)
// Bean type: EmailService.class`} />
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">💡 Key Point:</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    @Component is the generic stereotype. For better semantics, use @Service, @Repository, or @Controller instead.
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="@Service">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Specialization of @Component for service layer classes. Indicates the class holds business logic.
                  </p>
                </div>
                <CodeBlock code={`@Service
public class UserService {
    
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public User createUser(CreateUserRequest request) {
        // Business logic: validation, transformation
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        
        // Delegate to repository for persistence
        return userRepository.save(user);
    }
    
    public List<User> getAllActiveUsers() {
        return userRepository.findByStatus("ACTIVE");
    }
}

// Layer architecture:
// Controller → Service (business logic) → Repository (data access)`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🎯 Best Practice:</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    Keep business logic in @Service classes. Controllers should only handle HTTP concerns. Repositories only handle data access.
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="@Repository">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Specialization of @Component for DAO (Data Access Object) classes. <strong>Special feature:</strong> Automatically translates database exceptions to Spring's DataAccessException.
                  </p>
                </div>
                <CodeBlock code={`// Custom repository implementation
@Repository
public class UserRepositoryImpl implements UserRepositoryCustom {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    public List<User> findUsersWithCustomQuery(String criteria) {
        return entityManager.createQuery(
            "SELECT u FROM User u WHERE u.name LIKE :criteria", User.class)
            .setParameter("criteria", "%" + criteria + "%")
            .getResultList();
    }
}

// With Spring Data JPA - no implementation needed!
@Repository  // Optional - Spring Data adds it automatically
public interface UserRepository extends JpaRepository<User, Long> {
    
    List<User> findByStatus(String status);
    
    @Query("SELECT u FROM User u WHERE u.email = :email")
    Optional<User> findByEmail(@Param("email") String email);
}

// Exception translation example:
// SQLException → DataAccessException (Spring's unchecked exception)
// This happens automatically with @Repository`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@Autowired">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Tells Spring to inject a dependency automatically. Can be used on constructor, setter, or field.
                  </p>
                </div>
                <CodeBlock code={`// 1. CONSTRUCTOR INJECTION (Recommended ✅)
@Service
public class UserService {
    private final UserRepository userRepository;
    private final EmailService emailService;
    
    // @Autowired optional for single constructor (Spring 4.3+)
    public UserService(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
}

// With Lombok - even cleaner
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final EmailService emailService;
}

// 2. FIELD INJECTION (Not recommended ❌)
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;  // Hard to test!
}

// 3. SETTER INJECTION (Optional dependencies)
@Service
public class UserService {
    private EmailService emailService;
    
    @Autowired(required = false)  // Optional dependency
    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }
}`} />
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ Why avoid field injection?</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Can't use final fields (not truly immutable)</li>
                    <li>Hard to write unit tests (need reflection)</li>
                    <li>Hides dependencies (not visible in constructor)</li>
                    <li>Possible to create object without dependencies</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="@Qualifier">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Resolves ambiguity when multiple beans of the same type exist. Specifies which bean to inject.
                  </p>
                </div>
                <CodeBlock code={`// Multiple implementations of same interface
public interface NotificationService {
    void send(String message);
}

@Service("emailNotification")
public class EmailNotificationService implements NotificationService {
    public void send(String message) {
        // Send via email
    }
}

@Service("smsNotification")
public class SmsNotificationService implements NotificationService {
    public void send(String message) {
        // Send via SMS
    }
}

// Without @Qualifier - Spring doesn't know which to inject!
// Error: "expected single matching bean but found 2"

// With @Qualifier - specify the bean name
@Service
public class AlertService {
    private final NotificationService notificationService;
    
    public AlertService(@Qualifier("emailNotification") NotificationService notificationService) {
        this.notificationService = notificationService;
    }
}

// Custom qualifier annotation
@Qualifier
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD, ElementType.PARAMETER})
public @interface Email {}

@Service
@Email
public class EmailNotificationService implements NotificationService { }

@Service
public class AlertService {
    public AlertService(@Email NotificationService service) { }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@Primary">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Marks a bean as the default choice when multiple beans of the same type exist. Used when no @Qualifier is specified.
                  </p>
                </div>
                <CodeBlock code={`@Service
@Primary  // This will be injected by default
public class EmailNotificationService implements NotificationService {
    public void send(String message) {
        // Primary implementation
    }
}

@Service
public class SmsNotificationService implements NotificationService {
    public void send(String message) {
        // Alternative implementation
    }
}

// No @Qualifier needed - @Primary bean is injected
@Service
public class AlertService {
    private final NotificationService notificationService;
    
    public AlertService(NotificationService notificationService) {
        // EmailNotificationService injected (it's @Primary)
        this.notificationService = notificationService;
    }
}

// @Qualifier overrides @Primary
public AlertService(@Qualifier("smsNotification") NotificationService service) {
    // SmsNotificationService injected despite @Primary on Email
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@Bean">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Explicitly declares a bean in a @Configuration class. Used when you can't modify the source class or need custom initialization.
                  </p>
                </div>
                <CodeBlock code={`@Configuration
public class AppConfig {
    
    // Basic @Bean
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    
    // With custom name
    @Bean("customRestTemplate")
    public RestTemplate customRestTemplate() {
        RestTemplate template = new RestTemplate();
        template.setErrorHandler(new CustomErrorHandler());
        return template;
    }
    
    // With dependencies (injected via parameters)
    @Bean
    public UserService userService(UserRepository userRepository) {
        return new UserService(userRepository);
    }
    
    // Third-party class (can't add @Component)
    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.registerModule(new JavaTimeModule());
        return mapper;
    }
    
    // With init and destroy methods
    @Bean(initMethod = "init", destroyMethod = "cleanup")
    public DatabaseConnection databaseConnection() {
        return new DatabaseConnection();
    }
}`} />
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">📌 @Bean vs @Component</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-dark-600 dark:text-dark-400">
                      <thead>
                        <tr className="border-b border-emerald-200 dark:border-emerald-800">
                          <th className="text-left py-2">@Bean</th>
                          <th className="text-left py-2">@Component</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-emerald-100 dark:border-emerald-900">
                          <td className="py-2">Method-level</td>
                          <td>Class-level</td>
                        </tr>
                        <tr className="border-b border-emerald-100 dark:border-emerald-900">
                          <td className="py-2">In @Configuration class</td>
                          <td>On the class itself</td>
                        </tr>
                        <tr className="border-b border-emerald-100 dark:border-emerald-900">
                          <td className="py-2">For 3rd party classes</td>
                          <td>For your own classes</td>
                        </tr>
                        <tr>
                          <td className="py-2">Full control over creation</td>
                          <td>Spring creates automatically</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="@Configuration">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Marks a class as a source of bean definitions. Replaces XML configuration. Contains @Bean methods.
                  </p>
                </div>
                <CodeBlock code={`@Configuration
public class DatabaseConfig {
    
    @Value("\${db.url}")
    private String dbUrl;
    
    @Bean
    public DataSource dataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl(dbUrl);
        ds.setMaximumPoolSize(10);
        return ds;
    }
    
    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }
}

// Multiple configuration classes
@Configuration
@Import({SecurityConfig.class, CacheConfig.class})
public class AppConfig { }

// Conditional configuration
@Configuration
@Profile("production")
public class ProductionConfig { }

@Configuration
@ConditionalOnProperty(name = "feature.enabled", havingValue = "true")
public class FeatureConfig { }

// Internal: @Configuration classes are proxied
// Calling @Bean method multiple times returns same singleton instance`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Spring Boot Annotations */}
      {activeSection === 'spring-boot' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl">
              🚀
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Spring Boot Annotations</h2>
              <p className="text-dark-500 dark:text-dark-400">Auto-configuration and application setup</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="@SpringBootApplication" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> The main annotation for Spring Boot apps. It's a combination of three annotations that enables auto-configuration, component scanning, and configuration.
                  </p>
                </div>
                <CodeBlock code={`// @SpringBootApplication combines:
// 1. @Configuration - marks as configuration class
// 2. @EnableAutoConfiguration - enables auto-config
// 3. @ComponentScan - scans for components

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

// Equivalent to:
@Configuration
@EnableAutoConfiguration
@ComponentScan
public class MyApplication { }

// Customize scanning
@SpringBootApplication(scanBasePackages = {"com.example.app", "com.example.lib"})

// Exclude auto-configuration
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🔥 What happens when Spring Boot starts?</h4>
                  <ol className="list-decimal list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Creates SpringApplication instance</li>
                    <li>Determines application type (Servlet, Reactive, None)</li>
                    <li>Loads spring.factories for auto-configurations</li>
                    <li>Creates ApplicationContext</li>
                    <li>Performs component scanning</li>
                    <li>Runs auto-configuration (@Conditional checks)</li>
                    <li>Starts embedded server (Tomcat/Netty)</li>
                    <li>Runs ApplicationRunner/CommandLineRunner beans</li>
                  </ol>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="@EnableAutoConfiguration">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Tells Spring Boot to automatically configure beans based on classpath dependencies. If spring-web is on classpath, it configures web server.
                  </p>
                </div>
                <CodeBlock code={`// Auto-configuration process:
// 1. Scans META-INF/spring.factories
// 2. Finds auto-configuration classes
// 3. Evaluates @Conditional annotations
// 4. Creates beans if conditions met

// Example: DataSourceAutoConfiguration activates when:
@Configuration
@ConditionalOnClass(DataSource.class)  // DataSource class exists
@ConditionalOnMissingBean(DataSource.class)  // No DataSource bean defined
public class DataSourceAutoConfiguration {
    @Bean
    public DataSource dataSource() {
        // Auto-configured based on application.properties
    }
}

// View auto-configuration report
# In application.properties
debug=true

// Output shows:
// Positive matches - configurations that were activated
// Negative matches - configurations that were skipped

// Disable specific auto-config
@EnableAutoConfiguration(exclude = {
    DataSourceAutoConfiguration.class,
    SecurityAutoConfiguration.class
})`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@ComponentScan">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Tells Spring where to look for @Component, @Service, @Repository, @Controller classes. By default, scans the package of the class with this annotation and all sub-packages.
                  </p>
                </div>
                <CodeBlock code={`// Default: scans package of annotated class and below
@ComponentScan
public class AppConfig { }
// If AppConfig is in com.example, scans com.example.**

// Specify packages
@ComponentScan(basePackages = {"com.example.service", "com.example.repository"})

// Specify marker classes (type-safe)
@ComponentScan(basePackageClasses = {ServiceMarker.class, RepoMarker.class})

// Exclude specific components
@ComponentScan(
    basePackages = "com.example",
    excludeFilters = @ComponentScan.Filter(
        type = FilterType.ASSIGNABLE_TYPE,
        classes = TestConfig.class
    )
)

// Include only specific annotations
@ComponentScan(
    basePackages = "com.example",
    includeFilters = @ComponentScan.Filter(
        type = FilterType.ANNOTATION,
        classes = Service.class
    ),
    useDefaultFilters = false
)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@Value">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Injects values from properties files, environment variables, or SpEL expressions into fields or parameters.
                  </p>
                </div>
                <CodeBlock code={`// application.properties
app.name=MyApp
app.timeout=30
server.url=http://localhost:8080
feature.enabled=true

@Service
public class AppService {
    
    // Simple property
    @Value("\${app.name}")
    private String appName;
    
    // With default value
    @Value("\${app.timeout:60}")
    private int timeout;
    
    // Environment variable
    @Value("\${DATABASE_URL}")
    private String dbUrl;
    
    // Boolean
    @Value("\${feature.enabled:false}")
    private boolean featureEnabled;
    
    // SpEL expression
    @Value("#{systemProperties['user.home']}")
    private String userHome;
    
    // Constructor injection (preferred)
    public AppService(@Value("\${server.url}") String serverUrl) {
        this.serverUrl = serverUrl;
    }
    
    // Array/List
    @Value("\${app.servers}")  // app.servers=server1,server2,server3
    private String[] servers;
    
    @Value("#{'\${app.servers}'.split(',')}")
    private List<String> serverList;
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@ConfigurationProperties">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Binds external configuration (properties/yaml) to a Java object. Better than multiple @Value annotations for related properties.
                  </p>
                </div>
                <CodeBlock code={`// application.yml
app:
  name: MyApplication
  timeout: 30
  database:
    url: jdbc:mysql://localhost/db
    username: admin
    pool-size: 10
  servers:
    - http://server1.com
    - http://server2.com

// Properties class
@Configuration
@ConfigurationProperties(prefix = "app")
@Validated  // Enable validation
public class AppProperties {
    
    @NotBlank
    private String name;
    
    private int timeout = 60;  // Default value
    
    @Valid
    private Database database = new Database();
    
    private List<String> servers = new ArrayList<>();
    
    // Getters and setters required!
    
    public static class Database {
        @NotBlank
        private String url;
        private String username;
        private int poolSize;
        // Getters and setters
    }
}

// Enable configuration properties
@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class Application { }

// Usage
@Service
public class MyService {
    private final AppProperties props;
    
    public MyService(AppProperties props) {
        System.out.println(props.getName());
        System.out.println(props.getDatabase().getUrl());
    }
}`} />
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">✅ @ConfigurationProperties vs @Value</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Use @Value for single properties</li>
                    <li>Use @ConfigurationProperties for groups of related properties</li>
                    <li>@ConfigurationProperties supports validation, type-safety, relaxed binding</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* REST Controller Annotations */}
      {activeSection === 'rest' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-2xl">
              🌐
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">REST Controller Annotations</h2>
              <p className="text-dark-500 dark:text-dark-400">Building REST APIs</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="@RestController vs @Controller" defaultOpen>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">@Controller</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Returns view names (HTML pages). Use with template engines like Thymeleaf.</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">@RestController</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Returns data directly (JSON/XML). Combines @Controller + @ResponseBody.</p>
                  </div>
                </div>
                <CodeBlock code={`// @Controller - Returns views
@Controller
public class HomeController {
    
    @GetMapping("/home")
    public String home(Model model) {
        model.addAttribute("message", "Hello!");
        return "home";  // Returns view name: home.html
    }
    
    // Need @ResponseBody for JSON
    @GetMapping("/api/data")
    @ResponseBody
    public User getData() {
        return new User("John");  // Returns JSON
    }
}

// @RestController - Returns data (JSON by default)
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();  // Automatically serialized to JSON
    }
    
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
}

// @RestController = @Controller + @ResponseBody on every method`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@RequestMapping & HTTP Method Annotations">
              <div className="space-y-4">
                <CodeBlock code={`@RestController
@RequestMapping("/api/users")  // Base path for all methods
public class UserController {
    
    // GET /api/users
    @GetMapping
    public List<User> getAll() { }
    
    // GET /api/users/123
    @GetMapping("/{id}")
    public User getById(@PathVariable Long id) { }
    
    // POST /api/users
    @PostMapping
    public User create(@RequestBody User user) { }
    
    // PUT /api/users/123
    @PutMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody User user) { }
    
    // DELETE /api/users/123
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { }
    
    // PATCH /api/users/123
    @PatchMapping("/{id}")
    public User partialUpdate(@PathVariable Long id, @RequestBody Map<String, Object> updates) { }
}

// @RequestMapping with all options
@RequestMapping(
    value = "/users",
    method = RequestMethod.GET,
    produces = MediaType.APPLICATION_JSON_VALUE,
    consumes = MediaType.APPLICATION_JSON_VALUE,
    headers = "X-API-VERSION=1"
)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@PathVariable vs @RequestParam">
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">🔑 Key Difference:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><strong>@PathVariable:</strong> Part of URL path - /users/<strong>123</strong></li>
                    <li><strong>@RequestParam:</strong> Query parameter - /users?<strong>status=active</strong></li>
                  </ul>
                </div>
                <CodeBlock code={`@RestController
@RequestMapping("/api")
public class UserController {
    
    // @PathVariable - Extract from URL path
    // GET /api/users/123
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
    
    // Multiple path variables
    // GET /api/departments/5/employees/10
    @GetMapping("/departments/{deptId}/employees/{empId}")
    public Employee getEmployee(
            @PathVariable Long deptId,
            @PathVariable Long empId) {
        return employeeService.find(deptId, empId);
    }
    
    // @RequestParam - Extract from query string
    // GET /api/users?status=active&page=1&size=10
    @GetMapping("/users")
    public List<User> searchUsers(
            @RequestParam(required = false) String status,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return userService.search(status, page, size);
    }
    
    // Required param
    // GET /api/users/search?query=john (query is mandatory)
    @GetMapping("/users/search")
    public List<User> search(@RequestParam String query) {
        return userService.searchByName(query);
    }
}

// Use @PathVariable for: resource identifiers (IDs)
// Use @RequestParam for: filtering, sorting, pagination`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@RequestBody & @ResponseEntity">
              <div className="space-y-4">
                <CodeBlock code={`// @RequestBody - Deserialize JSON to object
@PostMapping("/users")
public User createUser(@RequestBody @Valid CreateUserRequest request) {
    // JSON body automatically converted to CreateUserRequest
    return userService.create(request);
}

// Request JSON:
// {
//   "name": "John",
//   "email": "john@example.com"
// }

// @ResponseEntity - Full control over HTTP response
@GetMapping("/users/{id}")
public ResponseEntity<User> getUser(@PathVariable Long id) {
    return userService.findById(id)
        .map(user -> ResponseEntity.ok(user))
        .orElse(ResponseEntity.notFound().build());
}

// Different response scenarios
@PostMapping("/users")
public ResponseEntity<User> createUser(@RequestBody User user) {
    User created = userService.create(user);
    
    URI location = ServletUriComponentsBuilder
        .fromCurrentRequest()
        .path("/{id}")
        .buildAndExpand(created.getId())
        .toUri();
    
    return ResponseEntity
        .created(location)  // 201 Created with Location header
        .body(created);
}

@DeleteMapping("/users/{id}")
public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
    userService.delete(id);
    return ResponseEntity.noContent().build();  // 204 No Content
}

// With custom headers
return ResponseEntity
    .ok()
    .header("X-Custom-Header", "value")
    .body(data);`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@CrossOrigin">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Enables Cross-Origin Resource Sharing (CORS) for specific controllers or methods. Allows frontend from different domain to call your API.
                  </p>
                </div>
                <CodeBlock code={`// On specific controller
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController { }

// On specific method
@GetMapping("/public")
@CrossOrigin(origins = "*")  // Allow all origins
public List<User> getPublicUsers() { }

// With all options
@CrossOrigin(
    origins = {"http://localhost:3000", "https://myapp.com"},
    methods = {RequestMethod.GET, RequestMethod.POST},
    allowedHeaders = {"Authorization", "Content-Type"},
    exposedHeaders = {"X-Custom-Header"},
    allowCredentials = "true",
    maxAge = 3600
)

// Global CORS configuration (better approach)
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOrigins("http://localhost:3000")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("*")
                    .allowCredentials(true);
            }
        };
    }
}`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Exception Handling Annotations */}
      {activeSection === 'exception' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-2xl">
              ⚠️
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Exception Handling Annotations</h2>
              <p className="text-dark-500 dark:text-dark-400">Global exception handling</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="@ExceptionHandler" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Handles specific exceptions in a controller. Method is invoked when the specified exception is thrown.
                  </p>
                </div>
                <CodeBlock code={`@RestController
public class UserController {
    
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    // Handle specific exception in this controller only
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleUserNotFound(UserNotFoundException ex) {
        return new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage()
        );
    }
    
    // Handle multiple exceptions
    @ExceptionHandler({IllegalArgumentException.class, ValidationException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleBadRequest(Exception ex) {
        return new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            ex.getMessage()
        );
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@ControllerAdvice & @RestControllerAdvice">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Global exception handling across all controllers. @RestControllerAdvice = @ControllerAdvice + @ResponseBody.
                  </p>
                </div>
                <CodeBlock code={`// Global exception handler for REST APIs
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);
    
    // Custom business exception
    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(ResourceNotFoundException ex, WebRequest request) {
        return ErrorResponse.builder()
            .status(HttpStatus.NOT_FOUND.value())
            .error("Not Found")
            .message(ex.getMessage())
            .path(request.getDescription(false))
            .timestamp(LocalDateTime.now())
            .build();
    }
    
    // Validation errors
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        List<String> errors = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(error -> error.getField() + ": " + error.getDefaultMessage())
            .collect(Collectors.toList());
        
        return ErrorResponse.builder()
            .status(HttpStatus.BAD_REQUEST.value())
            .error("Validation Failed")
            .message(String.join(", ", errors))
            .build();
    }
    
    // Catch-all for unexpected errors
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGeneric(Exception ex) {
        log.error("Unexpected error", ex);
        return ErrorResponse.builder()
            .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
            .error("Internal Server Error")
            .message("An unexpected error occurred")
            .build();
    }
}

// Error response DTO
@Data
@Builder
public class ErrorResponse {
    private int status;
    private String error;
    private String message;
    private String path;
    private LocalDateTime timestamp;
}`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">💡 Scope control:</h4>
                  <CodeBlock code={`// Apply to specific packages
@RestControllerAdvice(basePackages = "com.example.api")

// Apply to specific controllers
@RestControllerAdvice(assignableTypes = {UserController.class, OrderController.class})

// Apply to controllers with specific annotation
@RestControllerAdvice(annotations = RestController.class)`} />
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="@ResponseStatus">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Marks a method or exception class with the HTTP status code to return.
                  </p>
                </div>
                <CodeBlock code={`// On exception class
@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("User not found with id: " + id);
    }
}

// When this exception is thrown, Spring returns 404 automatically

// On controller method
@PostMapping("/users")
@ResponseStatus(HttpStatus.CREATED)  // Returns 201 instead of 200
public User createUser(@RequestBody User user) {
    return userService.create(user);
}

@DeleteMapping("/users/{id}")
@ResponseStatus(HttpStatus.NO_CONTENT)  // Returns 204
public void deleteUser(@PathVariable Long id) {
    userService.delete(id);
}

// With custom reason
@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Access denied")
public class AccessDeniedException extends RuntimeException { }`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* JPA / Hibernate Annotations */}
      {activeSection === 'jpa' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-2xl">
              🗄️
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">JPA / Hibernate Annotations</h2>
              <p className="text-dark-500 dark:text-dark-400">Entity mapping and relationships</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="Entity Mapping Annotations" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`@Entity  // Marks as JPA entity (required)
@Table(name = "users", schema = "public",
    indexes = @Index(name = "idx_email", columnList = "email"))
public class User {
    
    @Id  // Primary key (required)
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment
    private Long id;
    
    @Column(name = "user_name", nullable = false, length = 100, unique = true)
    private String username;
    
    @Column(nullable = false)
    private String email;
    
    @Column(name = "created_at", updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    
    @Enumerated(EnumType.STRING)  // Store as string, not ordinal
    private Status status;
    
    @Transient  // Not persisted to database
    private String tempData;
    
    @Lob  // Large object (BLOB/CLOB)
    private byte[] profilePicture;
}

// @GeneratedValue strategies:
// IDENTITY - Auto-increment (MySQL, PostgreSQL SERIAL)
// SEQUENCE - Database sequence (PostgreSQL, Oracle)
// TABLE - Separate table for IDs
// AUTO - Let JPA choose`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Relationship Annotations">
              <div className="space-y-4">
                <CodeBlock code={`// ONE-TO-ONE
@Entity
public class User {
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "profile_id", referencedColumnName = "id")
    private UserProfile profile;
}

// ONE-TO-MANY / MANY-TO-ONE (Parent-Child)
@Entity
public class Department {
    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Employee> employees = new ArrayList<>();
    
    // Helper methods
    public void addEmployee(Employee emp) {
        employees.add(emp);
        emp.setDepartment(this);
    }
}

@Entity
public class Employee {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;
}

// MANY-TO-MANY
@Entity
public class Student {
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();
}

@Entity
public class Course {
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students = new HashSet<>();
}`} />
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">⚡ EAGER vs LAZY Loading:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><strong>EAGER:</strong> Load immediately with parent (can cause N+1)</li>
                    <li><strong>LAZY:</strong> Load on first access (requires open session)</li>
                    <li><strong>Default:</strong> @OneToOne/@ManyToOne = EAGER, @OneToMany/@ManyToMany = LAZY</li>
                    <li><strong>Best practice:</strong> Use LAZY and fetch join when needed</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Performance Annotations">
              <div className="space-y-4">
                <CodeBlock code={`// @Fetch - Hibernate-specific fetch strategies
@Entity
public class Order {
    @OneToMany(mappedBy = "order")
    @Fetch(FetchMode.SUBSELECT)  // Fetch all in one subselect query
    private List<OrderItem> items;
}

// FetchMode options:
// SELECT - Separate SELECT for each (default, can cause N+1)
// JOIN - Use JOIN to fetch
// SUBSELECT - Use subselect for collections

// @BatchSize - Batch loading to reduce N+1
@Entity
public class Author {
    @OneToMany(mappedBy = "author")
    @BatchSize(size = 25)  // Load 25 at a time
    private List<Book> books;
}

// Global batch size in application.properties
# spring.jpa.properties.hibernate.default_batch_fetch_size=25

// @EntityGraph - Define fetch plan
@Entity
@NamedEntityGraph(
    name = "Order.withItems",
    attributeNodes = @NamedAttributeNode("items")
)
public class Order { }

// Usage in repository
@EntityGraph("Order.withItems")
List<Order> findAll();

// Or inline
@EntityGraph(attributePaths = {"items", "customer"})
Optional<Order> findById(Long id);`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Transaction Annotations */}
      {activeSection === 'transaction' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl">
              💾
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Transaction Annotations</h2>
              <p className="text-dark-500 dark:text-dark-400">Managing database transactions</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="@Transactional Deep Dive" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Defines transaction boundaries. Method executes in a transaction - all operations commit together or rollback on failure.
                  </p>
                </div>
                <CodeBlock code={`@Service
public class OrderService {
    
    // Basic - starts transaction, commits on success, rollbacks on RuntimeException
    @Transactional
    public Order createOrder(OrderRequest request) {
        Order order = new Order();
        orderRepository.save(order);
        
        inventoryService.reduceStock(request.getItems());  // Part of same transaction
        paymentService.processPayment(request.getPayment());
        
        return order;
        // If any fails, ALL operations rollback
    }
    
    // Read-only optimization
    @Transactional(readOnly = true)
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
    
    // Custom rollback rules
    @Transactional(
        rollbackFor = Exception.class,  // Rollback on ALL exceptions
        noRollbackFor = EmailException.class  // Except this one
    )
    public void processOrder(Long orderId) throws Exception { }
    
    // Timeout
    @Transactional(timeout = 30)  // 30 seconds
    public void longRunningOperation() { }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Propagation Types">
              <div className="space-y-4">
                <CodeBlock code={`// REQUIRED (default) - Use existing or create new
@Transactional(propagation = Propagation.REQUIRED)
public void methodA() {
    methodB();  // Uses methodA's transaction
}

// REQUIRES_NEW - Always create new (suspends existing)
@Transactional(propagation = Propagation.REQUIRES_NEW)
public void auditLog(String action) {
    // Logs even if parent transaction rolls back
    auditRepository.save(new AuditLog(action));
}

// Example: Log audit even if main transaction fails
@Transactional
public void transferMoney(Long from, Long to, BigDecimal amount) {
    auditService.log("Transfer initiated");  // REQUIRES_NEW - separate transaction
    
    accountService.debit(from, amount);
    accountService.credit(to, amount);
    // If this fails, main rolls back but audit log persists
}

// NESTED - Savepoint within existing transaction
@Transactional(propagation = Propagation.NESTED)
public void optionalStep() {
    // Can rollback to savepoint without affecting parent
}

// SUPPORTS - Use if exists, non-transactional if not
// NOT_SUPPORTED - Always non-transactional
// MANDATORY - Must have existing, throw if not
// NEVER - Must NOT have existing, throw if exists`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Isolation Levels">
              <div className="space-y-4">
                <CodeBlock code={`// READ_UNCOMMITTED - Dirty reads possible
@Transactional(isolation = Isolation.READ_UNCOMMITTED)

// READ_COMMITTED - No dirty reads (PostgreSQL default)
@Transactional(isolation = Isolation.READ_COMMITTED)

// REPEATABLE_READ - Same query returns same data (MySQL default)
@Transactional(isolation = Isolation.REPEATABLE_READ)

// SERIALIZABLE - Full isolation (slowest)
@Transactional(isolation = Isolation.SERIALIZABLE)

// Problems prevented by isolation levels:
// 
// | Issue              | READ_UNCOMMITTED | READ_COMMITTED | REPEATABLE_READ | SERIALIZABLE |
// |--------------------|------------------|----------------|-----------------|--------------|
// | Dirty Read         | ❌ Possible      | ✅ Prevented   | ✅ Prevented    | ✅ Prevented |
// | Non-Repeatable Read| ❌ Possible      | ❌ Possible    | ✅ Prevented    | ✅ Prevented |
// | Phantom Read       | ❌ Possible      | ❌ Possible    | ❌ Possible*    | ✅ Prevented |
//
// * MySQL's REPEATABLE_READ also prevents phantom reads using gap locks`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Common Pitfalls">
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">⚠️ What happens if exception in @Transactional?</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><strong>RuntimeException:</strong> Transaction rolls back (default)</li>
                    <li><strong>Checked Exception:</strong> Transaction commits! (unless rollbackFor specified)</li>
                    <li><strong>Error:</strong> Transaction rolls back</li>
                  </ul>
                </div>
                <CodeBlock code={`// PITFALL 1: Self-invocation bypass
@Service
public class OrderService {
    
    @Transactional
    public void processOrders() {
        for (Order order : orders) {
            this.processOrder(order);  // @Transactional IGNORED!
        }
    }
    
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void processOrder(Order order) {
        // This runs in parent's transaction, not its own
    }
}

// Why? Spring uses proxy. Internal calls bypass proxy.
// Solution: Inject self or use separate service

// PITFALL 2: Checked exceptions don't rollback
@Transactional
public void process() throws IOException {
    repository.save(entity);
    throw new IOException();  // Transaction COMMITS!
}

// Fix:
@Transactional(rollbackFor = Exception.class)

// PITFALL 3: Non-public methods
@Transactional  // IGNORED on private methods!
private void internalProcess() { }

// PITFALL 4: Missing @EnableTransactionManagement
// Spring Boot adds this automatically, but standalone Spring needs it`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Spring AOP Annotations */}
      {activeSection === 'aop' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center text-2xl">
              🎯
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Spring AOP Annotations</h2>
              <p className="text-dark-500 dark:text-dark-400">Aspect-Oriented Programming</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="@Aspect & @Pointcut" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`// Enable AOP
@Configuration
@EnableAspectJAutoProxy
public class AopConfig { }

// Define Aspect
@Aspect
@Component
public class LoggingAspect {
    
    // Pointcut - WHERE to apply advice
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void serviceLayer() {}
    
    @Pointcut("@annotation(com.example.Loggable)")
    public void loggableMethods() {}
    
    @Pointcut("within(com.example..*)")
    public void withinPackage() {}
    
    // Combine pointcuts
    @Pointcut("serviceLayer() && loggableMethods()")
    public void loggableServiceMethods() {}
}

// Pointcut expressions:
// execution(modifiers? return-type declaring-type.method(args) throws?)
// execution(* *.*(..)) - any method
// execution(public * *(..)) - any public method
// execution(* set*(..)) - methods starting with "set"
// @annotation(Ann) - methods with @Ann
// within(com.example..*) - all methods in package
// bean(*Service) - all beans ending with "Service"`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Advice Types (@Before, @After, @Around)">
              <div className="space-y-4">
                <CodeBlock code={`@Aspect
@Component
public class LoggingAspect {
    
    // @Before - runs before method
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        log.info("Calling: {}", joinPoint.getSignature().getName());
        log.info("Args: {}", Arrays.toString(joinPoint.getArgs()));
    }
    
    // @After - runs after method (finally block - always runs)
    @After("execution(* com.example.service.*.*(..))")
    public void logAfter(JoinPoint joinPoint) {
        log.info("Completed: {}", joinPoint.getSignature().getName());
    }
    
    // @AfterReturning - runs after successful return
    @AfterReturning(
        pointcut = "execution(* com.example.service.*.*(..))",
        returning = "result"
    )
    public void logReturn(JoinPoint joinPoint, Object result) {
        log.info("Returned: {}", result);
    }
    
    // @AfterThrowing - runs after exception
    @AfterThrowing(
        pointcut = "execution(* com.example.service.*.*(..))",
        throwing = "ex"
    )
    public void logException(JoinPoint joinPoint, Exception ex) {
        log.error("Exception in {}: {}", joinPoint.getSignature().getName(), ex.getMessage());
    }
    
    // @Around - most powerful, controls execution
    @Around("execution(* com.example.service.*.*(..))")
    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        
        try {
            Object result = joinPoint.proceed();  // Execute actual method
            return result;
        } finally {
            long duration = System.currentTimeMillis() - start;
            log.info("{} executed in {}ms", joinPoint.getSignature().getName(), duration);
        }
    }
}`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🔄 Execution Order:</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    @Around (before proceed) → @Before → Method → @AfterReturning/@AfterThrowing → @After → @Around (after proceed)
                  </p>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Spring Security Annotations */}
      {activeSection === 'security' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-2xl">
              🔐
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Spring Security Annotations</h2>
              <p className="text-dark-500 dark:text-dark-400">Securing APIs</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="@EnableWebSecurity" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`@Configuration
@EnableWebSecurity
@EnableMethodSecurity  // For @PreAuthorize, @PostAuthorize
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults());
        
        return http.build();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@PreAuthorize & @PostAuthorize">
              <div className="space-y-4">
                <CodeBlock code={`// Enable method security
@Configuration
@EnableMethodSecurity
public class SecurityConfig { }

@Service
public class UserService {
    
    // Must have ADMIN role
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long id) { }
    
    // Must have specific authority
    @PreAuthorize("hasAuthority('READ_USERS')")
    public List<User> getAllUsers() { }
    
    // Check method parameter
    @PreAuthorize("#userId == authentication.principal.id or hasRole('ADMIN')")
    public User getUser(Long userId) { }
    
    // Complex expression
    @PreAuthorize("hasRole('ADMIN') and #request.amount < 10000")
    public void processPayment(PaymentRequest request) { }
    
    // @PostAuthorize - checks AFTER method execution
    @PostAuthorize("returnObject.owner == authentication.name")
    public Document getDocument(Long id) {
        return documentRepository.findById(id);
    }
}

// @PreFilter and @PostFilter for collections
@PreFilter("filterObject.owner == authentication.name")
public void deleteDocuments(List<Document> documents) { }

@PostFilter("filterObject.visible == true")
public List<Document> getAllDocuments() { }`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@Secured & @RolesAllowed">
              <div className="space-y-4">
                <CodeBlock code={`// @Secured - Spring Security specific
@Secured("ROLE_ADMIN")
public void adminOnlyMethod() { }

@Secured({"ROLE_USER", "ROLE_ADMIN"})  // Either role
public void userOrAdminMethod() { }

// @RolesAllowed - JSR-250 standard (Jakarta EE)
@RolesAllowed("ADMIN")  // No ROLE_ prefix needed
public void adminMethod() { }

@RolesAllowed({"USER", "ADMIN"})
public void commonMethod() { }

// Enable JSR-250 annotations
@EnableMethodSecurity(jsr250Enabled = true)

// Comparison:
// @Secured - Spring specific, simple roles only
// @RolesAllowed - Standard Java, simple roles only
// @PreAuthorize - Most powerful, SpEL expressions`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Validation Annotations */}
      {activeSection === 'validation' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-2xl">
              ✅
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Validation Annotations</h2>
              <p className="text-dark-500 dark:text-dark-400">Bean Validation (JSR-380)</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="Common Validation Annotations" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`public class CreateUserRequest {
    
    @NotNull(message = "Name cannot be null")
    @NotBlank(message = "Name cannot be blank")
    @Size(min = 2, max = 50, message = "Name must be 2-50 characters")
    private String name;
    
    @NotEmpty(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;
    
    @NotNull
    @Min(value = 18, message = "Must be at least 18")
    @Max(value = 150, message = "Age cannot exceed 150")
    private Integer age;
    
    @Pattern(regexp = "^\\+?[1-9]\\d{1,14}$", message = "Invalid phone number")
    private String phone;
    
    @Size(min = 8, message = "Password must be at least 8 characters")
    @Pattern(regexp = ".*[A-Z].*", message = "Must contain uppercase")
    @Pattern(regexp = ".*[0-9].*", message = "Must contain digit")
    private String password;
    
    @Past(message = "Birth date must be in the past")
    private LocalDate birthDate;
    
    @Future(message = "Expiry must be in the future")
    private LocalDateTime expiryDate;
    
    @Positive(message = "Amount must be positive")
    private BigDecimal amount;
    
    @Valid  // Validate nested object
    private Address address;
}

// Difference: @NotNull vs @NotEmpty vs @NotBlank
// @NotNull - not null (but empty string is OK)
// @NotEmpty - not null AND not empty (size > 0)
// @NotBlank - not null, not empty, AND not just whitespace`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Using @Valid in Controllers">
              <div className="space-y-4">
                <CodeBlock code={`@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // @Valid triggers validation
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody CreateUserRequest request) {
        // If validation fails, MethodArgumentNotValidException is thrown
        return ResponseEntity.ok(userService.create(request));
    }
    
    // @Validated for groups
    @PostMapping("/quick")
    public User quickCreate(@Validated(QuickCreate.class) @RequestBody CreateUserRequest request) {
        return userService.create(request);
    }
    
    // Validate path variables and request params
    @GetMapping("/{id}")
    public User getUser(@PathVariable @Min(1) Long id) {
        return userService.findById(id);
    }
    
    @GetMapping
    public List<User> search(@RequestParam @Size(min = 2) String query) {
        return userService.search(query);
    }
}

// Handle validation errors globally
@RestControllerAdvice
public class ValidationExceptionHandler {
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
            errors.put(error.getField(), error.getDefaultMessage())
        );
        return errors;
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Custom Validators">
              <div className="space-y-4">
                <CodeBlock code={`// Custom annotation
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueEmailValidator.class)
public @interface UniqueEmail {
    String message() default "Email already exists";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

// Validator implementation
@Component
public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {
    
    @Autowired
    private UserRepository userRepository;
    
    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {
        if (email == null) return true;  // Let @NotNull handle null
        return !userRepository.existsByEmail(email);
    }
}

// Usage
public class CreateUserRequest {
    @Email
    @UniqueEmail
    private String email;
}`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Core Java Annotations */}
      {activeSection === 'java-core' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-2xl">
              ☕
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Core Java Annotations</h2>
              <p className="text-dark-500 dark:text-dark-400">Built-in Java annotations</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="@Override" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Indicates method overrides a superclass method. Compiler error if method doesn't actually override.
                  </p>
                </div>
                <CodeBlock code={`class Animal {
    void makeSound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    
    @Override  // Compiler verifies this actually overrides
    void makeSound() {
        System.out.println("Bark");
    }
    
    @Override  // ERROR! No such method in parent
    void makeSond() {  // Typo caught by compiler
        System.out.println("Bark");
    }
}

// Best practice: ALWAYS use @Override
// - Catches typos
// - Documents intent
// - IDE warns if parent method changes`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@FunctionalInterface">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Marks interface as functional (exactly one abstract method). Can be used with lambdas.
                  </p>
                </div>
                <CodeBlock code={`@FunctionalInterface
public interface Calculator {
    int calculate(int a, int b);
    
    // Can have default methods
    default void log(String msg) {
        System.out.println(msg);
    }
    
    // Can have static methods
    static Calculator add() {
        return (a, b) -> a + b;
    }
    
    // ERROR if you add another abstract method
    // int anotherMethod();
}

// Usage with lambda
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;

System.out.println(add.calculate(5, 3));  // 8

// Built-in functional interfaces:
// Predicate<T>   - T -> boolean
// Function<T,R>  - T -> R
// Consumer<T>    - T -> void
// Supplier<T>    - () -> T
// BiFunction<T,U,R> - (T, U) -> R`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@SuppressWarnings">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Tells compiler to suppress specific warnings. Use sparingly and with comments explaining why.
                  </p>
                </div>
                <CodeBlock code={`// Suppress unchecked cast warnings
@SuppressWarnings("unchecked")
public List<String> getItems() {
    return (List<String>) cache.get("items");
}

// Suppress deprecation warnings
@SuppressWarnings("deprecation")
public void useOldApi() {
    oldMethod();  // Deprecated but we must use for compatibility
}

// Multiple warnings
@SuppressWarnings({"unchecked", "rawtypes"})
public void process(List items) {
    List<String> strings = (List<String>) items;
}

// Common warning types:
// "unchecked"    - unchecked type operations
// "deprecation" - using deprecated API
// "rawtypes"    - using raw types
// "unused"      - unused variable/import
// "serial"      - missing serialVersionUID
// "all"         - all warnings (avoid!)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="@Deprecated">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Purpose:</strong> Marks element as deprecated. Compiler warns when deprecated element is used.
                  </p>
                </div>
                <CodeBlock code={`public class UserService {
    
    /**
     * @deprecated Use {@link #findById(Long)} instead.
     * Will be removed in version 2.0
     */
    @Deprecated(since = "1.5", forRemoval = true)
    public User getUser(Long id) {
        return findById(id);
    }
    
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}

// Java 9+ attributes:
// since - version when deprecated
// forRemoval - will be removed in future (stronger warning)

// Usage generates compiler warning:
User user = userService.getUser(1L);  // Warning: deprecated

// Best practices:
// 1. Always document WHY deprecated
// 2. Suggest alternative
// 3. Mention when it will be removed
// 4. Use forRemoval=true if definitely removing`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}
    </div>
  );
}

