import { Shield, CheckCircle, AlertCircle, FileText, Phone } from 'lucide-react';

export function InsuranceInfo() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500 p-2 rounded-lg">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Versicherungsschutz</h3>
          <p className="text-sm text-gray-600">Deine Sicherheit ist uns wichtig</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Coverage Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-5">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Vollständiger Schutz während der Fahrt
          </h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-900">Haftpflichtversicherung</p>
                <p className="text-sm text-gray-600">Bis zu CHF 100'000'000 Deckungssumme</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-900">Unfallversicherung</p>
                <p className="text-sm text-gray-600">Für alle Insassen während der Fahrt</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-900">Rechtsschutz</p>
                <p className="text-sm text-gray-600">Kostenlose rechtliche Beratung im Schadensfall</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-900">Insassenschutz</p>
                <p className="text-sm text-gray-600">Personenschäden bis CHF 5'000'000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="border border-yellow-300 bg-yellow-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-900">
              <p className="font-semibold mb-1">Wichtig zu wissen:</p>
              <ul className="space-y-1 ml-4 list-disc">
                <li>Der Versicherungsschutz gilt nur während bestätigter JoinUs-Fahrten</li>
                <li>Fahrer müssen über eine gültige Fahrerlaubnis verfügen</li>
                <li>Das Fahrzeug muss ordnungsgemäss versichert sein</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Insurance Partner */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <h4 className="font-semibold text-gray-900 mb-3">Versicherungspartner</h4>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Allianz Suisse</p>
              <p className="text-sm text-gray-600">Führender Versicherer in der Schweiz</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Police Nr.</p>
              <p className="font-mono text-sm font-semibold text-gray-900">CH-2024-JU-001</p>
            </div>
          </div>
        </div>

        {/* Claims Process */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-600" />
            Im Schadensfall
          </h4>
          <div className="space-y-2 text-sm text-gray-700">
            <p>1. Dokumentiere den Schaden mit Fotos</p>
            <p>2. Melde den Vorfall innerhalb von 24h über die App</p>
            <p>3. Fülle den Schadensbericht online aus</p>
            <p>4. Unser Team bearbeitet deinen Fall innerhalb von 2 Werktagen</p>
          </div>
        </div>

        {/* Contact */}
        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Phone className="w-5 h-5 text-orange-600" />
            Notfall-Hotline
          </h4>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-2xl font-bold text-orange-600 mb-1">+41 800 123 456</p>
            <p className="text-sm text-gray-600">24/7 erreichbar • Kostenlos aus der ganzen Schweiz</p>
          </div>
        </div>

        {/* Download Documents */}
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium">
            📄 Versicherungsdetails PDF
          </button>
          <button className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium">
            📋 Schadensbericht
          </button>
        </div>
      </div>
    </div>
  );
}
