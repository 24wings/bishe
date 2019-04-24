using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using JWT.Algorithms;
using JWT.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Wings.Base.Common.Attrivute;
using Wings.Base.Common.DTO;
using Wings.Base.Common.Services;

namespace Wings.Base.Common {

    /// <summary>
    /// 流式上传
    /// </summary>
    [ApiController]
    [Route ("/api/Base/Common/upload")]
    public class UploadController : Controller {
        /// <summary>
        /// 
        /// </summary>
        public UploadController () { }

        /// <summary>
        /// 流式上传
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public object upload ([FromForm (Name = "file")] IFormFile file, string filename) {
            filename = DateTime.Now.Second + filename;
            //将源文件 读取成文件流
            Stream fromFile = file.OpenReadStream ();
            OSSService.uploadFile (fromFile, filename);
            return new { filename = "http://cucr.airuanjian.vip/" + filename };
        }
    }
}