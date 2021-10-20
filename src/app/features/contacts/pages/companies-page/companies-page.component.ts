import {Component, OnInit} from '@angular/core'
import {NbDialogService} from '@nebular/theme'
import {Company} from '../../../../core/models/company'

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.scss']
})
export class CompaniesPageComponent implements OnInit {

  loading = true

  headerTableCompany: string[] = [
    '#',
    'EMPRESA',
    'CORREOS',
    'TELEFONOS',
    'UBICACIÓN',
    'ACCIONES'
  ]
  fields = [
    'empresa',
    'correos',
    'telefonos',
    'location',
  ]
  empresas: Company[] = []


  constructor() {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.empresas = []
    this.loading = true
    // this.empresaFront.getEmpresas().subscribe(
    //   (resp: any) => {
    //     this.empresas = resp
    //     this.loading = false
    //   }, (err: any) => {
    //     this.loading = false
    //     console.log(err)
    //   }
    // )
  }

  search() {
  }

  openModal() {
    // this.dialogService.open(ModalCompanyComponent, {
    //   closeOnBackdropClick: false,
    //   context: {
    //     title: 'Agregar empresa',
    //   },
    // })
  }

}
