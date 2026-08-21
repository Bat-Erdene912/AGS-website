import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const AirportMap = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Our Location</CardTitle>
        <CardDescription>
          Chinggis Khaan International Airport, Ulaanbaatar, Mongolia
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.8234567890123!2d106.82345678901234!3d47.84567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDUwJzQ0LjQiTiAxMDbCsDQ5JzI0LjQiRQ!5e0!3m2!1sen!2smn!4v1234567890123!5m2!1sen!2smn"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chinggis Khaan International Airport Location"
          />
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <div className="font-semibold text-sm">Address</div>
              <div className="text-sm text-muted-foreground">
                Chinggis Khaan International Airport<br />
                Sergelen, Töv Province<br />
                Ulaanbaatar 17042, Mongolia
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                Airport Code
              </div>
              <div className="font-semibold">UBN / ZMUB</div>
            </div>
            <div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                Operating Hours
              </div>
              <div className="font-semibold">24/7</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AirportMap;