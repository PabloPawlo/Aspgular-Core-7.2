using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserConfigurator.Models;

namespace UserConfigurator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        List<User> _usersList = new List<User>();
        public UsersController()
        {
            _usersList.Add(new User() { Id = 1, Surname = "Kowalski", IsAlive = true, BirthDate = DateTime.Now });
            _usersList.Add(new User() { Id = 2, Surname = "Gula", IsAlive = true, BirthDate = DateTime.Now });
            _usersList.Add(new User() { Id = 3, Surname = "Sup", IsAlive = false, BirthDate = DateTime.Now });
            _usersList.Add(new User() { Id = 4, Surname = "Miu", IsAlive = true, BirthDate = DateTime.Now });
            _usersList.Add(new User() { Id = 5, Surname = "Rydz", IsAlive = false, BirthDate = DateTime.Now });
        }

        // GET: api/Users
        [HttpGet]
        public IEnumerable<User> GetUser()
        {
            return _usersList;
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public ActionResult<User> GetUser(int id)
        {
            var user = _usersList.Find(x => x.Id == id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            try
            {
                _usersList.Remove(_usersList.Find(x => x.Id == id));
                _usersList.Add(user);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        [HttpPost]
        public ActionResult<User> PostUser(User user)
        {
            _usersList.Add(user);

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public ActionResult<User> DeleteUser(int id)
        {
            var user = _usersList.Find(x => x.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            _usersList.Remove(_usersList.Find(x => x.Id == id));
            return user;
        }

        private bool UserExists(int id)
        {
            var user = _usersList.Find(x => x.Id == id);
            return _usersList.Contains(user);
        }
    }
}
