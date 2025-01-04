using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsurancePartner.Model;
using InsurancePartner.Repository.Common;
using Microsoft.Data.SqlClient;
using Dapper;

namespace InsurancePartner.Repository
{
    public class PolicyRepository : IPolicyRepository
    {
        private readonly string _connectionString;

        public PolicyRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<int> CreatePolicyAsync(Policy policy)
        {
            using var connection = new SqlConnection(_connectionString);
            var sql = "INSERT INTO Policies (PolicyNumber, Amount, PartnerId) VALUES (@PolicyNumber, @Amount, @PartnerId); SELECT CAST(SCOPE_IDENTITY() as int);";
            return await connection.ExecuteScalarAsync<int>(sql, policy);
        }
    }
}
