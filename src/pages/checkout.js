import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Checkout extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Checkout" keywords={[`gatsby`, `application`, `react`]} />
        <div className="Checkout">
          <div className="container">
            {/* To make form work, use your own formspree credentials in action="" */}
            <form
              method="POST"
              name="checkout"
              action="/sukses" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              type="file"
              netlify
            >
            <input type="hidden" name="bot-field" />  <input type="hidden" name="form-name" value="checkout" />
              <div>
                <label>Nama Anda:
                <input type="text" name="name" /></label>
              </div>
              <div>
                <label>Email Anda: 
                <input type="email" name="email" /></label>
              </div>
              <div>
                <label>Nomor Telpon:
                <input type="number" name="number" /></label>
              </div>
              <div>
                <label>Kode/Produk Yang ingin dibeli:
                <input type="text" name="product code" /></label>
              </div>
              <div>
                <label>Alamat Lengkap: 
                <textarea type="text" name="address" placeholder="Jalan, Kota, Kecamatan, Kelurahan, Kode Pos" /></label>
              </div>
              <hr></hr>
              <div>
              <label>Catatan Pembeli
                <textarea type="text" name="buyer notes" fie /></label>
              </div>
              <div>
              <p class="text-center">Dengan ini Anda menyetujui <a href="/syarat-dan-ketentuan" > Syarat dan Ketentuan</a><input type="checkbox" name="checkbox" checked="checked" /></p>
                <button type="submit" value="Submit">Kirim</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Checkout
