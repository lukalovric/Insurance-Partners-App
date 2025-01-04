using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsurancePartner.Repository.Common;
using InsurancePartner.Model;
using Microsoft.Data.SqlClient;
using Dapper;

namespace InsurancePartner.Repository
{
    public class PartnerRepository : IPartnerRepository
    {
        private readonly string _connectionString;

        public PartnerRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<Partner>> GetAllPartnersAsync()
        {
            using var connection = new SqlConnection(_connectionString);
            return await connection.QueryAsync<Partner>("SELECT Id, CONCAT(FirstName, ' ', LastName) AS FullName, PartnerNumber, CreatedAtUtc, IsForeign, PartnerTypeId, Gender FROM Partners ORDER BY CreatedAtUtc DESC");
        }

        public async Task<Partner> GetPartnerByIdAsync(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            return await connection.QueryFirstOrDefaultAsync<Partner>("SELECT * FROM Partners WHERE Id = @Id", new { Id = id });
        }

        public async Task<int> CreatePartnerAsync(Partner partner)
        {
            using var connection = new SqlConnection(_connectionString);
            var sql = "INSERT INTO Partners (FirstName, LastName, Address, PartnerNumber, CroatianPIN, PartnerTypeId, CreatedAtUtc, CreateByUser, IsForeign, ExternalCode, Gender) VALUES (@FirstName, @LastName, @Address, @PartnerNumber, @CroatianPIN, @PartnerTypeId, @CreatedAtUtc, @CreateByUser, @IsForeign, @ExternalCode, @Gender); SELECT CAST(SCOPE_IDENTITY() as int);";
            return await connection.ExecuteScalarAsync<int>(sql, partner);
        }
    }
}
