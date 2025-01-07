using InsurancePartner.Service.Common;
using InsurancePartner.Repository.Common;
using InsurancePartner.Repository;
using InsurancePartner.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = "Server=localhost;Database=InsurancePartnersDB;User Id=SA;Password=Fantazija123!;TrustServerCertificate=True;Encrypt=True;";
builder.Services.AddControllers();
builder.Services.AddSingleton<IPartnerRepository>(new PartnerRepository(connectionString));
builder.Services.AddSingleton<IPolicyRepository>(new PolicyRepository(connectionString));
builder.Services.AddScoped<IPartnerService, PartnerService>();
builder.Services.AddScoped<IPolicyService, PolicyService>();// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // React app URL
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowReactApp");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
